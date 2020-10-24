import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  searchFile = new FormControl('');
  descriptionField = new FormControl('');

  categoryField = new FormControl('category-3');
  // El value va estar separado por comas
  tagField = new FormControl('');

  agreeField = new FormControl(false);
  genderField = new FormControl('');
  zoneField = new FormControl('');
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

  checkboxChangeHandle(event: GenericEvent<HTMLInputElement>) {
    const { target: { checked, value } } = event;
    if (checked) {
      this.preferences.push(value);
    } else {
      const index = this.preferences.indexOf(value);
      this.preferences.splice(index, 1);
    }
  }

}
