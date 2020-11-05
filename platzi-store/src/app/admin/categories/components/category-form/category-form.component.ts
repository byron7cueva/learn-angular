import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';

import { MyValidators } from '@utils/validators';
import { Category } from '@core/models/category.model';
import { CategoriesService } from '@core/services/categories.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup;
  isNew = true;

  @Input()
  set category(data: Category) {
    // Los setter saben el momento cuando se poblan los datos
    if (data) {
      this.isNew = false;
      this.form.patchValue(data);
    }
  }

  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private categoriesService: CategoriesService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [ Validators.required, Validators.minLength(4) ], MyValidators.validateCategory(this.categoriesService)],
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
      if (this.isNew) {
        this.create.emit(this.form.value);
      } else {
        this.update.emit(this.form.value);
      }
    } else {
      this.form.markAllAsTouched();
    }
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
