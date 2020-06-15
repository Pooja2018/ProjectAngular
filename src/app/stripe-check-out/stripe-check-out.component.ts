import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { of } from 'node_modules/rxjs';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-stripe-check-out',
  templateUrl: './stripe-check-out.component.html',
  styleUrls: ['./stripe-check-out.component.css']
})
export class StripeCheckOutComponent implements OnInit {
  total;

  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }
  handler: any = null;


  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  loadStripe() {
    
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}

  ngOnInit() {
    this.loadStripe();
  }

  func()
  {
    alert("Your Order Has Been Placed!");
  }

  pay(amount) {    

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Your Order Has Been Placed!');
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

}

}
