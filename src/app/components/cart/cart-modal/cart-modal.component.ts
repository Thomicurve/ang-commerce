import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProudct } from 'src/app/features/ang-commerce/interfaces/cart-product.interface';
import { CartService } from 'src/app/features/ang-commerce/services/cart.service';

@Component({
    selector: 'app-cart-modal',
    templateUrl: 'cart-modal.component.html',
    styleUrls: ['./cart-modal.component.scss'],
    standalone: true,
    imports: [CommonModule]
})

export class CartModalComponent implements OnInit {
    @Output() closeModal = new EventEmitter();

    cartItems$!: Observable<CartProudct[]>;
    totalCartPrice$!: Observable<number>;

    constructor(private cartService: CartService) { }

    ngOnInit() {
        this.totalCartPrice$ = this.cartService.getTotalPrice();
        this.cartItems$ = this.cartService.getCartItems();
    }

    removeItem(item: CartProudct) {
        this.cartService.removeCartItem(item);
    }

    close() {
        this.closeModal.emit();
    }
}