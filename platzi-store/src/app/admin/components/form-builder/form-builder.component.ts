import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  private buildForm() {
    // Construyendo el formulario

    this.form = this.formBuilder.group({
      // Se puede agregar otro FormGroup
      fullName: this.formBuilder.group({
        name: ['', [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]],
        last: ['', [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]]
      }),
      email: ['', [ Validators.required, Validators.email ]],
      phone: ['', Validators.required ],
      color: ['#000000'],
      date: [''],
      age: [12, [ Validators.required, Validators.min(18), Validators.max(100) ]],
      category: ['category-3'],
      tag: [''],
      agree: [false, Validators.requiredTrue ],
      gender: [''],
      zone: ['']
    });
  }

  ngOnInit(): void {
    // Escuchar los cambios del formulario
    /*this.form.valueChanges
      .subscribe(value => {
        // Nos envia todo el objeto
        console.log(value);
      });*/
  }

  get nameField() {
    return this.form.get('fullName').get('name');
  }

  get lastField() {
    return this.form.get('fullName.last');
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

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.value;
  }

  get isNameFieldInValid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  save(event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      // Marcar a todos los campos del formulario como touched
      this.form.markAllAsTouched();
    }
  }

}
