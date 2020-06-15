import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { of } from 'node_modules/rxjs';
import { Product } from 'src/app/product';
import { map } from 'rxjs/operators';
import { CartItem } from 'src/app/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private itemsInCart: Product[] = [];
  
  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Product) {
    const productExistInCart = this.itemsInCart.find(({id})=>id===item.id);
    if(!productExistInCart)
    {
      this.itemsInCart.push({...item, num:1});
      return;
    }
    productExistInCart.num += 1;
    //this.itemsInCartSubject.next([...this.itemsInCart, item]);
 }

  public getItems(): Observable<Product[]> {
    return this.itemsInCartSubject;
  }

  public removeFromCart(item: Product) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((items: Product[]) => {
      return items.reduce((prev, curr: Product) => {
        return prev + curr.unitPrice * curr.num;
      }, 0);
    }));
  }
}
