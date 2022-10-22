import { Component, OnInit } from '@angular/core';
import { ICoffee } from '../coffee';
import { CoffeeService } from '../coffee.service';
import { Store, select } from '@ngrx/store';
import * as fromCoffee from '../coffee.selectors'
import { loadCoffees } from '../coffee.actions';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {
  errorMessage = '';
  coffeeList: ICoffee[] = [];
  title = "We love you a";
  p: number = 1;
  rippleColor: string = "white";

  constructor(private coffeeSrv: CoffeeService, private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(loadCoffees());
    this.store.pipe(select(fromCoffee.getCoffees)).subscribe(
      data => {
        this.coffeeList = data;
        console.log(this.coffeeList)
      }
    )

    this.store.pipe(select(fromCoffee.getError)).subscribe(
      err => {
        this.errorMessage = err;
      }
    )
  }
}
