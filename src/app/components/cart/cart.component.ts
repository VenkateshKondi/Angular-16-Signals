import { Component } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor(public productService: ProductsDataService) { }

}
