import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cartItems: any = signal([]);
  constructor() {}
  addToCart(item: any): void {
    this.cartItems.update((cv: any) => {
      item.count = 1;
      cv.push(item);
      return [...cv];
    });
  }
  isInCart(item: any) {
    return this.cartItems().find((cartItem: any) => item.id === cartItem.id);
  }
  incItemCount(citem: any) {
    this.cartItems.update((cv: any[]) => {
      return cv.map((item) => {
        if (item.id === citem.id) {
          item.count++;
        }
        return item;
      });
    });
  }
  decItemCount(citem: any) {
    this.cartItems.update((cv: any[]) => {
      return cv.map((item) => {
        if (item.id === citem.id) {
          item.count--;
        }
        return item;
      });
    });
  }
}
