import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  // Se le puede agregar un valor por defecto
  nameField = new FormControl('soy un control');

  constructor() { }

  ngOnInit(): void {
    // Escuchar cambios del field
    // Obteniendo la información de forma reactiva
    // valueChanges es un observable
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  getNameValue() {
    // Ver el valor del field
    console.log(this.nameField.value);
  }

}
