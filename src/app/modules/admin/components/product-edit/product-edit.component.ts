import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from 'src/app/modules/core/services/products/products.service';
import { Product } from 'src/app/modules/core/models/product.model';
import { CustomValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.initForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  private initForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidator.isPriceValid]],
      image: ['/assets/images/nintendo.png', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  updateProduct(event: Event): void {
    const product = this.form.value;

    this.productService.putProduct(this.id, product)
    .subscribe(() => {
      this.router.navigate(['/admin/products']);
    });
    event.preventDefault();
  }

  get priceField() {
    return this.form.get('price');
  }

}
