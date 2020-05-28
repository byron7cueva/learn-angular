import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  // Variables que puedo renderizar en el tamplate del componente (archivo html)
  title = 'platzi-store';
  items = ['byron', 'nicolas', 'julian'];
  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
