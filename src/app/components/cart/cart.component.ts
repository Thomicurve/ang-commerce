import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/features/ang-commerce/services/cart.service';
import { CartModalComponent } from './cart-modal/cart-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule, CartModalComponent]
})
export class CartComponent implements OnInit {
  cartItemsCount$!: Observable<number>;

  showDialog: boolean = false;
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItemsCount$ = this.cartService.getCartItemsLength();
  }
}
