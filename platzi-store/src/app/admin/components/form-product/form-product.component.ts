import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

import { ProductsService } from '@core/services/products.service';
import { MyValidators } from '@utils/validators';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private afs: AngularFireStorage
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

  uploadFile(event) {
    // Obteniendo el archivo
    const file = event.target.files[0];
    // Necesita un directorio
    const name = 'image.jpg';
    // La referencia del archivo
    const fileRef = this.afs.ref(name);
    // Se necesita de una tarea
    const task = this.afs.upload(name, file);
    // Es un observable
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }

}
