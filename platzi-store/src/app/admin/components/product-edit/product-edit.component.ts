import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from '@core/services/products.service';
import { CategoriesService } from '@core/services/categories.service';
import { Category } from '@core/models/category.model';
import { MyValidators } from '@utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {
    // Se debe llamar desde aca porque se utiliza para construir el formulario
    this.buildForm();
  }

  get priceField() {
    return this.form.get('price');
  }

  get nameField() {
    return this.form.get('name');
  }

  get nameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  ngOnInit(): void {
    this.getCategories();

    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        // Llenando los datos en el formulario
        this.form.patchValue(product);
      });
    });
  }

  private buildForm() {
    // Permite crear un grupo de componentes a traves de una configuracion
    this.form = this.formBuilder.group({
      // [estado_inicial, [validaciones]]
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: ['', Validators.required],
      category_id: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  private getCategories() {
    this.categoriesService.getAllCategories()
    .subscribe((categories) => {
      this.categories = categories;
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe(newProduct => {
        console.log(this.form.value);
        this.router.navigate(['./admin/products']);
      });
    }
  }
}
