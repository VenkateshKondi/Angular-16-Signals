import { Component } from '@angular/core';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public productService: ProductsDataService) { }
}
