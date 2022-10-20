import { createAction, props } from '@ngrx/store';

export const loadCoffees = createAction(
  '[Coffee] Load Coffees'
);

export const loadCoffeesSuccess = createAction(
  '[Coffee] Load Coffees Success',
  props<{ data: any }>()
);

export const loadCoffeesFailure = createAction(
  '[Coffee] Load Coffees Failure',
  props<{ error: any }>()
);
