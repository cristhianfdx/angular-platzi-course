import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  clickProduct(id: number) {
    console.log('product: ', id);
  }

}
