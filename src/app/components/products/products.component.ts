import { Component } from '@angular/core';
import { IVegetable } from 'src/app/model';
import { ApiService } from 'src/app/services/api.service';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  constructor(private _apiService: ApiService, public productService: ProductsDataService) { }

  ngOnInit() {
    this.loadProductsData();
  }
  loadProductsData() {
    this._apiService.getProductList().subscribe((resp: IVegetable[]) => {
      this.productService.productsList.set(resp);
    })
  }

  addToCart(item: IVegetable) {
    this.productService.cartList.mutate((value) => {
      value.push(item);
    })
  }
}
