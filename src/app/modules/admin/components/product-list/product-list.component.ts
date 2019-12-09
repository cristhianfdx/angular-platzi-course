import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/core/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id)
    .subscribe(response => {
      if (response) {
        const index = this.products.indexOf(product);
        if (index > -1) {
          this.products.splice(index, 1);
        }
        this.products = [...this.products];
      }
    });
  }
}
