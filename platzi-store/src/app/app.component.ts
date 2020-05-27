import { Component } from '@angular/core';

import { Product } from './models/product.model';

// Este archivo se encarga de la logica del componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Indica que archivo html va renderizar el componente
  styleUrls: ['./app.component.scss'] // Nombre de los estilos asociado
})
export class AppComponent {
  // Variables que puedo renderizar en el tamplate del componente (archivo html)
  title = 'platzi-store';
  items = ['byron', 'nicolas', 'julian'];
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  clickProduct(id: number) {
    console.log('product', id);
  }
}
