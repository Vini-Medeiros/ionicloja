import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: 'shopping.page.html',
  styleUrls: ['shopping.page.scss'],
})
export class ShoppingPage {
  products: any[] = [
    { name: 'Xbox Series X', price: 4000, image: 'xbox.png' },
    { name: 'Playstation 5', price: 4000, image: 'ps5.png' },
    { name: 'Nintendo Switch', price: 2300, image: 'nintendo.png' },
    { name: 'Playstation 4', price: 2000, image: 'ps4.png' },
    { name: 'Xbox One S', price: 1900, image: 'xboxS.png' },
    { name: 'Xbox Series S', price: 2800, image: 'xboxSS.png' },
    { name: 'Playstation 4 Slim', price: 2200, image: 'ps4slim.png' },
    { name: 'Xbox One X', price: 2300, image: 'xboxOX.png' },
  ];

  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }
}
