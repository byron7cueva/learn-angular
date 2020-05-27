import { Component } from '@angular/core';

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

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
