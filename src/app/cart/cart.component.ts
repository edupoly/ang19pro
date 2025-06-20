import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  protected ps = inject(ProductsService);
  getTotal() {
    return this.ps.cartItems().reduce((a: number, b: any) => {
      return a + b.count * b.price;
    }, 0);
  }
}
