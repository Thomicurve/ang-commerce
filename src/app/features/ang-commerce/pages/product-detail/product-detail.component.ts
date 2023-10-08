import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  productQuantity: number = 1;

  constructor(
    private productService: ProductService, 
    private route: ActivatedRoute,
    private cartService: CartService) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if(id) {
      const product = await this.productService.getProductById(parseInt(id));
      
      if(product) {
        this.product = product;
      } else {
        alert('product not found')
      }

    } else {
      alert('error');
    }
  }

  addToCart() {
    for(let i = 0; i < this.productQuantity; i++) {
      this.cartService.addItemToCart(this.product);
    }
  }
}
