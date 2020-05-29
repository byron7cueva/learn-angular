import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    // new FormControl('valor_inicial_campo', [validaciones])
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
      // Validators.minLength(4),
      // Validators.maxLength(10)
    ]);

    // Escuchar un cambio
    /* this.emailField.valueChanges
      .subscribe(value => {
        console.log(value);
      }); */
  }

  ngOnInit(): void {
  }

  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
