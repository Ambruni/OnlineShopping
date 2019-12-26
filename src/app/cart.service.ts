import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items=[];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product){

    for (let item of this.items ) {
      if (item.name === product.name) {
        item.count = item.count + 1;
        return;
      }
    }

    product.count = 1;

    this.items.push(product);

  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}