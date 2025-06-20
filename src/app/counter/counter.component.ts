import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  // count = 0;
  // inc() {
  //   this.count++;
  // }
  // dec() {
  //   this.count--;
  // }

  //state
  count = signal(0);

  //action
  inc() {
    this.count.update((cv) => cv + 1);
  }
  dec() {
    this.count.update((cv) => cv - 1);
  }
}
// change detection //zone.js
