import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoffee } from '../coffee';
import { Store, select } from '@ngrx/store';
import * as fromCoffee from '../coffee.selectors'
import { loadCoffees } from '../coffee.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeDetailsComponent implements OnInit {
  p: number = 1;
  coffeeID: any;
  coffeeList: ICoffee[] = [];
  errorMessage = '';
  coffeeSelected = false;
  coffeeData : any;
  blendName: any;
  intensifier: any;
  notes: any;
  origin: any;
  variety: any;
  coffeeDataSubscription: any;
  browserRefresh = false;

  constructor(private store: Store, private actvRoute: ActivatedRoute, private router: Router,  private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe(
      params => {
        this.coffeeID =  params['id'];
      }
    )
    this.coffeeSelected = this.coffeeID ? true: false;
    
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

    console.log(this.coffeeList)
    if(this.coffeeSelected) {
      this.coffeeData = this.coffeeList.find(item => item.id === Number(this.coffeeID));
      console.log(this.coffeeData)
      this.blendName = this.coffeeData.blend_name;
      this.intensifier = this.coffeeData.intensifier;
      this.notes = this.coffeeData.notes;
      this.origin = this.coffeeData.origin;
      this.variety = this.coffeeData.variety;
    }
  }
  ngOnDestroy(){
    this.coffeeDataSubscription.unsubscribe();
  }

}