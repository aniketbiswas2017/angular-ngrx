import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CoffeeListComponent },
  { path: 'details', component: CoffeeDetailsComponent },
  { path: 'details/:id', component: CoffeeDetailsComponent },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CoffeeListComponent,
  CoffeeDetailsComponent,
  PageErrorComponent,
];
