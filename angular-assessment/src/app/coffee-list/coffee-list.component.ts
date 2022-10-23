import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICoffee } from '../coffee';
import { Store, select } from '@ngrx/store';
import * as fromCoffee from '../coffee.selectors'
import { loadCoffees } from '../coffee.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeListComponent implements OnInit {
  errorMessage = '';
  coffeeList: ICoffee[] = [];
  title = "We love you a";
  p: number = 1;
  coffeeDataSubscription: any;

  constructor(private store: Store, private router: Router, private ref: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.store.dispatch(loadCoffees());

    this.coffeeDataSubscription = this.store.pipe(select(fromCoffee.getCoffees)).subscribe(
      data => {
        this.coffeeList = data;
        this.ref.detectChanges();
      }
    )

    this.store.pipe(select(fromCoffee.getError)).subscribe(
      err => {
        this.errorMessage = err;
      }
    )
  }

  onSelectCoffee(coffee: any) {
    this.router.navigate(['/details'], { queryParams: { id: coffee.id } });
  }

  ngOnDestroy(){
    this.coffeeDataSubscription.unsubscribe();
  }
}
