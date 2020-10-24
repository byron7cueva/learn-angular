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
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  ageField = new FormControl(12);
  urlField = new FormControl('');
  rangeField = new FormControl(5);
  timeField = new FormControl('');
  descriptionField = new FormControl('');

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
