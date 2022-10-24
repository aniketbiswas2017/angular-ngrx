import { Action, createReducer, on } from '@ngrx/store';
import { ICoffee } from '../../shared/interface/coffee';
import {
  loadCoffees,
  loadCoffeesFailure,
  loadCoffeesSuccess,
} from '../actions/coffee.actions';

export const coffeeFeatureKey = 'coffeeListState';

export interface State {
  coffees: ICoffee[];
  error: string;
}

export const initialState: State = {
  coffees: [],
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(loadCoffees, (state, action) => {
    return {
      ...state,
    };
  }),
  on(loadCoffeesSuccess, (state, action) => {
    return {
      ...state,
      coffees: action.data,
      error: '',
    };
  }),
  on(loadCoffeesFailure, (state, action) => {
    return {
      ...state,
      coffees: [],
      error: action.error,
    };
  })
);
