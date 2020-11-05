import { Component, OnInit } from '@angular/core';
// ActivatedRoute permite ver cual es el parametro que viene en la ruta
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Category } from '@core/models/category.model';
import { CategoriesService } from '@core/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // Se debe poner como el nombre que se le puso en la ruta
      if (params.id) {
        this.getCategory(params.id);
      }
    });
  }

  createCategory(data) {
    this.categoriesService.createCategory(data)
    .subscribe(result => {
      this.router.navigate(['./admin/categories']);
    });
  }

  updateCategory(data) {
    this.categoriesService.updateCategory(this.category._id, data)
    .subscribe(result => {
      this.router.navigate(['./admin/categories']);
    });
  }

  private getCategory(categoryId: string) {
    this.categoriesService.getCategory(categoryId)
    .subscribe((category: Category) => {
      this.category = category;
    });
  }

}
