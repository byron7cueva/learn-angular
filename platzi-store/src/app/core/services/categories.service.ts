import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCategories() {
    return this.httpClient.get<Category[]>(`${environment.url_api}/categories`);
  }

  createCategory(data: Partial<Category>) {
    return this.httpClient.post<Category>(`${environment.url_api}/categories`, data);
  }

  updateCategory(id: string, data: Partial<Category>) {
    return this.httpClient.put<Category>(`${environment.url_api}/categories/${id}`, data);
  }
}
