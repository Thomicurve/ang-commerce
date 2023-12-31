import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/features/ang-commerce/interfaces/products.interface';
import { CartService } from 'src/app/features/ang-commerce/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CurrencyPipe, CommonModule, RouterModule]
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}
  
  addCartProduct() {
    this.cartService.addItemToCart(this.product);
  }
}
