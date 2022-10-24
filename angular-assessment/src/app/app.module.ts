import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

import { CoffeeService } from './services/coffee.service';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageErrorComponent } from './shared/page-error/page-error.component';
import { QuotesComponent } from './shared/quotes/quotes.component';
import { CoffeeEffects } from './store/effects/coffee.effects';
import { metaReducers, reducers } from './store/reducers';

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
