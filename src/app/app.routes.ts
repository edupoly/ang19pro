import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: 'ctr',
    component: CounterComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
