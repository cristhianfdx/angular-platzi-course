import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
  LayoutComponent,
  ListComponent
],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class ContactModule { }

