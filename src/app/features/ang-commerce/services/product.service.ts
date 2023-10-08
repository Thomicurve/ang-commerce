import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { ProductFilter } from '../interfaces/product-filter.interface';
import { ApiResponse } from '../interfaces/api-response.interface';

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor() { }

  async getAllProducts(filter: ProductFilter): Promise<Product[]> {
    let response = await fetch('../../../../assets/fake-api.json');
    let { products }: ApiResponse = await response.json(); 

    if(filter.productName != '') {
      products = products.filter(p => p.name.toLowerCase().includes(filter.productName.toLowerCase()));
    }

    if(filter.categoryId != 0) {
      products = products.filter(p => p.categories.some(cat => cat.id == filter.categoryId));
    }

    return products;
  }

  async getProductById(id: number): Promise<Product | undefined> {
    let response = await fetch('../../../../assets/fake-api.json');
    let { products }: ApiResponse = await response.json(); 

    return products.find(p => p.id == id);
  }
}