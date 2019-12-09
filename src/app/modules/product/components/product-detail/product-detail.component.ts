import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.getProduct(id);
    });
  }

  getProduct(id: string) {
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo producto',
      image: 'assets/images/banner-1.png',
      price: 33000,
      description: 'Description'
    };

    this.productService.postProduct(newProduct)
    .subscribe(response => {
      console.log(response);
    });
  }

  updateProduct(id: string) {
    const product: Partial<Product> = {
      price: 33000,
      description: 'Editado'
    };

    this.productService.putProduct(id, product)
    .subscribe(response => {
      console.log(response);
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct('222')
    .subscribe(response => {
      console.log(response);
    });
  }

}
