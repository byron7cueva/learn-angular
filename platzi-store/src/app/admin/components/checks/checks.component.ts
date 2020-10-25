import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl
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
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss']
})
export class ChecksComponent implements OnInit {

  form: FormGroup;

  preferencesList: Array<Preference> = [
    { area: 'Contenido Digital', value: 'contenido-digital' },
    { area: 'Desarrollo e Ingeniería', value: 'desarrollo' },
    { area: 'Diseño y UX', value: 'diseño' },
    { area: 'Marketing', value: 'marketing' },
    { area: 'Negocion y Emprendimiento', value: 'negocios' },
    { area: 'Crecimiento Profesional', value: 'crecimiento-profesional' },
    { area: 'Startup', value: 'startup' }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      preferences: this.formBuilder.array([])
    });
  }

  checkboxChangeHandle(event: GenericEvent<HTMLInputElement>) {
    const preferences: FormArray = this.form.get('preferences') as FormArray;

    if (event.target.checked) {
      preferences.push(new FormControl(event.target.value));
    } else {
      const index = preferences.controls.findIndex(control => control.value === event.target.value);
      preferences.removeAt(index);
    }
  }

  save(event) {
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }

}
