import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/features/ang-commerce/interfaces/products.interface';
import { CartService } from 'src/app/features/ang-commerce/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent implements OnInit {
  cartItemsCount$!: Observable<number>;
  cartItems$!: Observable<Product[]>;

  totalCartPrice$!: Observable<number>;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItemsCount$ = this.cartService.getCartItemsLength();
    this.cartItems$ = this.cartService.getCartItems();
    this.totalCartPrice$ = this.cartService.getTotalPrice();
  }

  buy() {

  }

  removeItem(item: Product) {
    this.cartService.removeCartItem(item);
  }
  
}
