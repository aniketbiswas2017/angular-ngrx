import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './coffee.effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { CoffeeService } from './coffee.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    QuotesComponent,
    routingComponents,
    PageErrorComponent,
    CoffeeListComponent,
    CoffeeDetailsComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CoffeeEffects]),
    BrowserAnimationsModule,
  ],
  exports: [MaterialModule, NgxPaginationModule],
  providers: [CoffeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
