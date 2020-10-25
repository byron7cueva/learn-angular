import { Component, OnInit } from '@angular/core';
// Validators es un conjunto de validadores normales para los formularios
// contiene funciones que pueden ser reutilizadas
import {
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';

interface Preference {
  area: string;
  value: string;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface GenericEvent<T> extends Omit<Event, 'target'> {
    target: T;
}

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form = new FormGroup({
    // Se le puede agregar un valor por defecto
    // FormControl(valor_por_defecto, validaciones_sincronas, validaciones_asincronas)
    // Las validaciones sincronas pueden ser una o varias, se la puede pasar solo una validación o un array
    name: new FormControl('', [ Validators.required, Validators.maxLength(10) ]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    age: new FormControl(12),
    category: new FormControl('category-3'),
    // El value va estar separado por comas
    tag: new FormControl(''),
    agree: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl('')
  });

  urlField = new FormControl('');
  rangeField = new FormControl(5);
  timeField = new FormControl('');
  searchFile = new FormControl('');
  descriptionField = new FormControl('');

  preferences: string[] = [];

  preferencesList: Array<Preference> = [
    { area: 'Contenido Digital', value: 'contenido-digital' },
    { area: 'Desarrollo e Ingeniería', value: 'desarrollo' },
    { area: 'Diseño y UX', value: 'diseño' },
    { area: 'Marketing', value: 'marketing' },
    { area: 'Negocion y Emprendimiento', value: 'negocios' },
    { area: 'Crecimiento Profesional', value: 'crecimiento-profesional' },
    { area: 'Startup', value: 'startup' }
  ];

  constructor() {}

  ngOnInit(): void {
    // Escuchar cambios del field
    // Obteniendo la información de forma reactiva
    // valueChanges es un observable
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get ageField() {
    return this.form.get('age');
  }

  get categoryField() {
    return this.form.get('category');
  }

  get tagField() {
    return this.form.get('tag');
  }

  get agreeField() {
    return this.form.get('agree');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get zoneField() {
    return this.form.get('zone');
  }

  getNameValue() {
    // Ver el valor del field
    console.log(this.nameField.value);
  }

  checkboxChangeHandle(event: GenericEvent<HTMLInputElement>) {
    const { target: { checked, value } } = event;
    if (checked) {
      this.preferences.push(value);
    } else {
      const index = this.preferences.indexOf(value);
      this.preferences.splice(index, 1);
    }
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.value;
  }

  get isNameFieldInValid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  save(event) {
    console.log(this.form.value);
  }

}