import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoffee } from '../../shared/interface/coffee';
import { Store, select } from '@ngrx/store';
import * as fromCoffee from '../../store/selectors/coffee.selectors';
import { loadCoffees } from '../../store/actions/coffee.actions';
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
  coffeeDetailsData: any;
  blendName: any;
  intensifier: any;
  notes: any;
  origin: any;
  variety: any;
  coffeeDataSubscription: any;

  constructor(
    private store: Store,
    private actvRoute: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe((params) => {
      this.coffeeID = params['id'];
    });
    this.coffeeSelected = this.coffeeID ? true : false;

    this.store.dispatch(loadCoffees());
    this.coffeeDataSubscription = this.store
      .pipe(select(fromCoffee.getCoffees))
      .subscribe((data) => {
        this.coffeeList = data;
        this.ref.detectChanges();
      });

    this.store.pipe(select(fromCoffee.getError)).subscribe((err) => {
      this.errorMessage = err;
      this.ref.detectChanges();
    });

    if (this.coffeeSelected) {
      this.coffeeDetailsData = this.coffeeList.find(
        (item) => item.id === Number(this.coffeeID)
      );
      this.blendName = this.coffeeDetailsData.blend_name;
      this.intensifier = this.coffeeDetailsData.intensifier;
      this.notes = this.coffeeDetailsData.notes;
      this.origin = this.coffeeDetailsData.origin;
      this.variety = this.coffeeDetailsData.variety;
    }
  }
  ngOnDestroy() {
    this.coffeeDataSubscription.unsubscribe();
  }
}
