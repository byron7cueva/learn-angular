import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(6), MyValidators.validPassword ]],
      confirmPassword: ['', [ Validators.required ]],
      type: ['company', [Validators.required]],
      companyName: ['', [Validators.required]]
    }, {
      // Validación de forma grupal
      // El control que se envia al validador es del formulario
      validators: MyValidators.matchPasswords
    });

    // Escuchando de forma reactiva el cambio
    this.typeField.valueChanges
    .subscribe(value => {
      // Cambiando una validación de forma dinámica
      if (value === 'company') {
        this.companyNameField.setValidators([Validators.required]);
      } else {
        this.companyNameField.clearValidators();
      }

      // Es necesario actualizar el valor y revalidarlo
      this.companyNameField.updateValueAndValidity();
      this.form.updateValueAndValidity();
    });
  }

  get passwordField() {
    return this.form.get('password');
  }

  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }

  get isPasswordInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }

  get typeField() {
    return this.form.get('type');
  }

  get companyNameField() {
    return this.form.get('companyName');
  }

  registerUser(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.createUser(email, password)
      .then(() => {
        // Redireccionando a Login
        this.router.navigate(['/auth/login']);
      });
    }
  }

}
