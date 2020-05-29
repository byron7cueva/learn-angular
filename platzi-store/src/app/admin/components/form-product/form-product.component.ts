import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from '../../../core/services/products.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    // Se debe llamar desde aca porque se utiliza para construir el formulario
    this.buildForm();
  }

  get priceField() {
    return this.form.get('price');
  }

  ngOnInit(): void {
  }

  private buildForm() {
    // Permite crear un grupo de componentes a traves de una configuracion
    this.form = this.formBuilder.group({
      // [estado_inicial, [validaciones]]
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: '',
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe(newProduct => {
        console.log(this.form.value);
        this.router.navigate(['./admin/products']);
      });
    }
  }

}
