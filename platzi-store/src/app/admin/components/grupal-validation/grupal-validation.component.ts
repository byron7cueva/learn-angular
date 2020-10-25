import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-grupal-validation',
  templateUrl: './grupal-validation.component.html',
  styleUrls: ['./grupal-validation.component.scss']
})
export class GrupalValidationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      min: ['', Validators.min(0) ],
      max: ['', Validators.max(100)]
    },
    {
      validators: MyValidators.range(0, 100)
    }
    );
  }

  get minField() {
    return this.form.get('min');
  }

  get maxField() {
    return this.form.get('max');
  }

  enviar(event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
