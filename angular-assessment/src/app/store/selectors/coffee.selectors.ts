import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/coffee.reducer';


const getCoffeeFeatureState = createFeatureSelector<State>('coffeeListState');

export const getCoffees = createSelector(
  getCoffeeFeatureState,
  (state) => state.coffees
);

export const getError = createSelector(
  getCoffeeFeatureState,
  (state) => state.error
);
