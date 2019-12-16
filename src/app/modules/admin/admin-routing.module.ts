import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { DatesComponent } from './components/dates/dates.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/create',
        component: ProductNewComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      },
      {
        path: 'dates',
        component: DatesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
