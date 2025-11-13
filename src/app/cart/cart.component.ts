import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  public ps = inject(ProductService);
}
