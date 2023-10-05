import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response.interface';
import { Category } from '../interfaces/category.interface';

@Injectable({providedIn: 'root'})
export class CategoryService {
  constructor() { }
  
  async getAllCategories(): Promise<Category[]> {
    let response = await fetch('../../../../assets/fake-api.json');
    let { categories }: ApiResponse = await response.json();
    
    return categories;
  }
}