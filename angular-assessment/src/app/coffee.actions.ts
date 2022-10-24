import { createAction, props } from '@ngrx/store';
import { ICoffee } from './coffee';

export const loadCoffees = createAction('[Coffee] Load Coffees');

export const loadCoffeesSuccess = createAction(
  '[Coffee] Load Coffees Success',
  props<{ data: ICoffee[] }>()
);

export const loadCoffeesFailure = createAction(
  '[Coffee] Load Coffees Failure',
  props<{ error: string }>()
);
