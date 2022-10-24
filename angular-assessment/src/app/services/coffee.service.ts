import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ICoffee } from '../shared/interface/coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  private coffeeListURL =
    'https://random-data-api.com/api/coffee/random_coffee?size=50';

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<ICoffee[]> {
    return this.http
      .get<ICoffee[]>(this.coffeeListURL)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
