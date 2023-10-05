import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/products.interface';
import { ProductFilter } from '../interfaces/product-filter.interface';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { CategoryService } from '../services/category.service';
import { Category } from '../interfaces/category.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  isLoading: boolean = false;

  filter = new BehaviorSubject<ProductFilter>({categoryId: 0, productName: ''});
  productFilter: ProductFilter = {
    categoryId: 0,
    productName: ''
  }

  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  async getProductsFiltered(value = this.productFilter) {
    this.products = await this.productService.getAllProducts(value);    
    this.isLoading = false;
  }

  onFilterChange() {
    this.filter.next(this.productFilter);
  }

  async ngOnInit() {
    this.filter
    .pipe(
      debounceTime(500)
    )
    .subscribe((value) => {
      this.isLoading = true;
      this.getProductsFiltered(value);
    })

    this.categories = await this.categoryService.getAllCategories();
  }
}
