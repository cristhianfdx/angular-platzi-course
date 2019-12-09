import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavigationComponent,
    TableComponent,
    DashboardComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ]
})
export class AdminModule {}
