import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  power = 0;

  items = ['Luis', 'Pedro', 'Camilo', 'Cristhian'];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items.push(`nuevo item`);
  }

  removeItem(i: number) {
    this.items.splice(i, 1);
  }

}
