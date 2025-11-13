import { Component, inject, signal } from '@angular/core';
import products from './products.json';
import { ProductService } from '../product.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  allproducts = signal([...products]);
  public ps = inject(ProductService);
}
