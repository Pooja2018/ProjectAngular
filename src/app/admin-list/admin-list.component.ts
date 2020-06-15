import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  products: any;
  currentProduct = null;
  currentIndex = -1;
  title = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
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
}
