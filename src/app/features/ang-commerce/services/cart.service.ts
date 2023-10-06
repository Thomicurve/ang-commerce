import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({providedIn: 'root'})
export class CartService {
    private cartItems = new BehaviorSubject<Product[]>([]);
    cartItems$ = this.cartItems.asObservable();
    
    addItemToCart(item: Product) {
        const items = this.cartItems.getValue();
        items.push(item);
        this.cartItems.next(items);
    }

    getCartItemsLength(): Observable<number> {
        return this.cartItems$.pipe(
            map(items => items.length)
        )
    }

    getCartItems(): Observable<Product[]> {
        return this.cartItems$;
    }

    removeCartItem(item: Product) {
        const items = this.cartItems.getValue();
        const index = items.findIndex(i => i.id === item.id);
        items.splice(index, 1);
        this.cartItems.next(items);
    }

    getTotalPrice(): Observable<number> {
        return this.cartItems$.pipe(
            map(items => items.reduce((acc, item) => acc + item.price, 0))
        )
    }
}