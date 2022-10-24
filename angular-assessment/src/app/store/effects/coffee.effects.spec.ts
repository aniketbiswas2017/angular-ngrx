import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoffeeEffects } from './coffee.effects';

describe('CoffeeEffects', () => {
  let actions$: Observable<any>;
  let effects: CoffeeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoffeeEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CoffeeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
