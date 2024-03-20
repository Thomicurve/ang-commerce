import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/products.interface';
import { ProductFilter } from '../../interfaces/product-filter.interface';
import { BehaviorSubject, debounceTime, tap } from 'rxjs';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit, AfterViewInit {

  products: Product[] = [];
  categories: Category[] = [];
  isLoading: boolean = false;

  filter = new BehaviorSubject<ProductFilter>({categoryId: 0, productName: ''});
  productFilter: ProductFilter = {
    categoryId: 0,
    productName: ''
  }

  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  ngAfterViewInit(): void {
    this.filter.next({categoryId: 0, productName: ''});
  }

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
      tap(() => this.isLoading = true),
      debounceTime(1000)
    )
    .subscribe((value) => {
      this.getProductsFiltered(value);
    })

    this.categories = await this.categoryService.getAllCategories();
  }
}
