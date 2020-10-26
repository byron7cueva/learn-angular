import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';


import { CategoriesService } from '@core/services/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get imageField() {
    return this.form.get('image');
  }

  get nameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get imageFieldInvalid() {
    return this.imageField.touched && this.imageField.invalid;
  }

  save() {
    if (this.form.valid) {
      this.createCategory();
    } else {
      this.form.markAllAsTouched();
    }
  }

  private createCategory() {
    const data = this.form.value;
    this.categoriesService.createCategory(data)
    .subscribe(result => {
      console.log(result);
      this.router.navigate(['./admin/categories']);
    });
  }

  uploadFile(event) {
    const image = event.target.files[0];
    const name = `${uuidv4()}.png`;
    // Referencia
    const ref = this.storage.ref(name);
    // Tarea que se encarga de subir la imagen
    const task = this.storage.upload(name, image);

    task.snapshotChanges()
    .pipe(
      // Cuando finaliza la subida de la imagen
      finalize(() => {
        const urlImage = ref.getDownloadURL();
        urlImage.subscribe(url => {
          console.log(url);
          this.imageField.setValue(url);
        });
      })
    )
    .subscribe();
  }

}
