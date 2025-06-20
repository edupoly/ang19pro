import { Component, signal } from '@angular/core';
import products from './products.json';
import { ProductsService } from '../products.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  allproducts = signal([...products]);
  constructor(protected ps: ProductsService) {}
  addItemToCart(item: any) {
    this.ps.addToCart(item);
  }
}
