import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const {email, password} = this.form.value;
      this.authService.login(email, password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('No es valido');
      });
    }
  }

}
