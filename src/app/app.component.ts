import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, ProductsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang19pro';
  protected ps = inject(ProductsService);
}
