import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/modules/core/services/cart/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // total = 0;
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );

    // this.cartService.cart$
    // .pipe(
    //   map(products => products.length)
    // )
    // .subscribe(total => this.total = total);


    // this.cartService.cart$.subscribe(products => {
    //   this.total = products.length;
    // });
  }

  ngOnInit() {
  }

}
