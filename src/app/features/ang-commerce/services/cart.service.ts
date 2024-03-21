import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { CartProudct } from '../interfaces/cart-product.interface';

@Injectable({providedIn: 'root'})
export class CartService {
    private cartItems = new BehaviorSubject<CartProudct[]>([]);
    cartItems$ = this.cartItems.asObservable();

    private cartQuantity = new BehaviorSubject<number>(0);
    cartQuantity$ = this.cartQuantity.asObservable();
    
    addItemToCart(item: Product) {
        const items = this.cartItems.getValue();
        const existingItem = this.cartItems.value.find(i => i.id == item.id);
        
        this.cartQuantity.next(this.cartQuantity.value + 1);
        if(existingItem) {
            existingItem.quantity++;

        } else {
            items.push({...item, quantity: 1});
        }
        this.cartItems.next(items);
    }

    getCartItemsLength(): Observable<number> {
        return this.cartQuantity$;
    }

    getCartItems(): Observable<CartProudct[]> {
        return this.cartItems$;
    }

    removeCartItem(item: CartProudct) {
        const items = this.cartItems.getValue();
        const index = items.findIndex(i => i.id === item.id);

        const existingItem = items.find(x => x.id == item.id);
        if(existingItem) {
            existingItem.quantity--;
            existingItem.quantity == 0 && items.splice(index, 1);
        }
        this.cartQuantity.next(this.cartQuantity.value - 1)
        this.cartItems.next(items);
    }

    getTotalPrice(): Observable<number> {
        return this.cartItems$.pipe(
            map(items => items.reduce((acc, item) => acc + (item.price * item.quantity), 0))
        )
    }
}