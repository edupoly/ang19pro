import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartItems: any = signal([]);
  addToCart(item: any) {
    item.count = 1;
    this.cartItems.update((cItems: any) => {
      cItems.push(item);
      return cItems;
    });
  }

  isItemInCart(item: any) {
    return this.cartItems().find((citem: any) => {
      if (citem.id === item.id) {
        return true;
      } else {
        return false;
      }
    });
  }
  
  incItemCount(item: any) {
    console.log(item);
    this.cartItems.update((cv: any) => {
      return cv.map((citem: any) => {
        if (citem.id === item.id) {
          citem.count++;
        }
        return citem;
      });
    });
  }
  decItemCount(item: any) {
    console.log(item);
    this.cartItems.update((cv: any) => {
      return cv.map((citem: any) => {
        if (citem.id === item.id) {
          citem.count--;
        }
        return citem;
      });
    });
  }
  constructor() {}
}
