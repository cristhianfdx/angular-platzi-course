import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/modules/core/models/product.model';
import { CartService } from 'src/app/modules/core/services/cart/cart.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  quantity$: Observable<number>;

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
    this.quantity$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit() {
  }

}
