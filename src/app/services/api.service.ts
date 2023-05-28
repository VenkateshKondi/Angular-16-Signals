import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IVegetable } from '../model';
import { vegetables } from '../vegetable';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() { }

  getProductList(): Observable<IVegetable[]> {
    return of(vegetables);
  }
}
