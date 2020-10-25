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

  get passwordField() {
    return this.form.get('password');
  }

  get isPasswordInvalid() {
    return this.passwordField.touched && this.passwordField.invalid;
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', [ Validators.required, Validators.minLength(6), MyValidators.validPassword ]]
    });
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
