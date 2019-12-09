import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy } from '@angular/core';

import { Product } from 'src/app/modules/core/models/product.model';
import { CartService } from 'src/app/modules/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  @Input() product: Product;
  @Output() handleAddCart: EventEmitter<any> = new EventEmitter();

  today: Date = new Date();

  constructor(private cartService: CartService) {
    console.log('1. Constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. ngOnChanges', changes);
  // }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngDoCheck');
  }

  addCart() {
    console.log('Añadir producto');
    this.cartService.addCart(this.product);
    // this.handleAddCart.emit(this.product.id);
  }

}
