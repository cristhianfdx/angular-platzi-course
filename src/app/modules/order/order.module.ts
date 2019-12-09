import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { DeleteRepeatPipe } from './pipes/delete-repeat/delete-repeat.pipe';
import { RepeatNumberPipe } from './pipes/repeat-number/repeat-number.pipe';



@NgModule({
  declarations: [OrderComponent, DeleteRepeatPipe, RepeatNumberPipe],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class OrderModule { }
