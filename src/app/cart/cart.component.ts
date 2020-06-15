import { Component, OnInit } from '@angular/core';
import { CartService } from  'src/app/services/cart.service';

import { window } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'node_modules/rxjs';
import { Product } from 'src/app/product';
import { map } from 'rxjs/operators';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total;
  currentProduct = null;
  res: number;
  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];
 
  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }


  removeFromCart(shoppingCartItems) {
    this.cartService.removeFromCart(shoppingCartItems);
    //window.alert('Your product has been added to the cart!');
  }

  public getTotal() {
    return this.cartService.getTotalAmount() ;
  }

  public calctotal() {
    return this.shoppingCartItems.reduce((sum, prod) => sum += prod.num ,0)
  }



  ngOnInit() {
   
  }

}
