import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCoffee from './coffee.reducer';

export interface State {
  [fromCoffee.coffeeFeatureKey]: fromCoffee.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCoffee.coffeeFeatureKey]: fromCoffee.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
