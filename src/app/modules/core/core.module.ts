import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';
import { AuthService } from './services/auth/auth.service';
import { FirebaseStorageService } from './services/firebaseStorage/firebase-storage.service';
import { TokenService } from './services/token/token.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    AuthService,
    FirebaseStorageService,
    TokenService
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CommonModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }

  }
}
