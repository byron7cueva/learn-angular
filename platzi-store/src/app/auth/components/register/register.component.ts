import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

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
      email: ['', Validators.email],
      password: ''
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
      })
    }
  }

}
