import { Injectable } from '@angular/core';
import { CartItem, ProductItem } from '@models/index';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  // BehaviorSubject for cart item count
  private cartItemsCount = new BehaviorSubject<number>(this.cartItems.length);
  cartItemsCount$ = this.cartItemsCount.asObservable();

  constructor(private _localStorageService: LocalstorageService) {
    this.cartItems = this._localStorageService.getItem('cart') || [];
    this.updateCartCount();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(item: ProductItem): void {
    const existingItemIndex = this.cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      this.increamentQuantity(item.id);
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
      this.updateCartCount();
    }
  }

  removeItem(productId: string): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.updateCartCount();
  }

  increamentQuantity(productId: string): void {
    const item = this.cartItems.find((i: CartItem) => i.id === productId);
    if (item) {
      item.quantity++;
    }
    this._localStorageService.addItem(this.cartItems, 'cart');
  }

  decreamentQuantity(productId: string): void {
    const item = this.cartItems.find((i: CartItem) => i.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
    this._localStorageService.addItem(this.cartItems, 'cart');
  }

  getTotalAmount(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  private updateCartCount(): void {
    this.cartItemsCount.next(this.cartItems.length);
    this._localStorageService.addItem(this.cartItems, 'cart');
  }
}
