import { Injectable, computed, signal } from '@angular/core';
import { IVegetable } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  constructor() { }

  productsList = signal<IVegetable[]>([]);
  cartList = signal<IVegetable[]>([]);

  totalCost = computed(() => {
    return this.cartList().reduce((total, item) => total + item.price, 0);
  });
}
