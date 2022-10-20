import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';



@Injectable()
export class CoffeeEffects {


  constructor(private actions$: Actions) {}
}
