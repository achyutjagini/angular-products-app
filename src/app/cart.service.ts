//Import the Product interface from ./products.ts into the cart.service.ts file
//in the CartService class, define an items property to store the array of the current products in the cart.
//The addToCart() method appends a product to an array of items
//The getItems() method collects the items users add to the cart and returns each item with 
//its associated quantity
//The clearCart() method returns an empty array of items,and empties the cart

import { Product } from './products';
import { Injectable } from '@angular/core';
/* . . . */

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
/* items store array of current products */

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}
