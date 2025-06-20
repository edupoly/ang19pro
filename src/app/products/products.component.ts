import { Component, signal } from '@angular/core';
import products from './products.json';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  allproducts = signal([...products]);
}
