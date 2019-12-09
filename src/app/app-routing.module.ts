import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './modules/layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
