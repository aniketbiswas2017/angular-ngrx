import { Component, OnInit } from '@angular/core';
import { ICoffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {
  errorMessage = '';
  coffeeList: ICoffee[] = [];
  title = "Coffee List";
  p: number = 1;

  constructor(private coffeeSrv: CoffeeService) { }

  ngOnInit(): void {
    this.coffeeSrv.getCoffees().subscribe(
       response => {
        this.coffeeList = response;
        console.log(this.coffeeList)
       });
  }
}
