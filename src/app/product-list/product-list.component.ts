import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

import { CartService } from  'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  currentProduct = null;
  currentIndex = -1;
  title = '';

  constructor(private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts() {
    this.productService.getAll()
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setActiveProduct(product, index) {
    this.currentProduct = product;
    this.currentIndex = index;
  }

  removeAllProducts() {
    this.productService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveProducts();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.productService.findByTitle(this.title)
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  addToCart(product) {
    this.currentProduct = product;
    this.cartService.addToCart(product);
    alert("Product has been added to cart!");
  }

}
