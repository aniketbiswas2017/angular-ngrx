import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { loadCoffees, loadCoffeesFailure, loadCoffeesSuccess } from './coffee.actions';
import { CoffeeService } from './coffee.service';



@Injectable()
export class CoffeeEffects {


  constructor(private actions$: Actions, private coffeeSrv: CoffeeService) {}

  loadCoffees$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCoffees),
      mergeMap(
        action => this.coffeeSrv.getCoffees().pipe(
          map( coffees => loadCoffeesSuccess({data: coffees})),
          catchError(err => of(loadCoffeesFailure({error: err})))
        )
      )
    );
  });
}
