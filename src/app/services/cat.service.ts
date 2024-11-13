import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = [];

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product) {
    this.cartItems.push(product);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    this.cartItems = [];
  }
}
