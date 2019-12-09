import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from 'src/app/modules/core/services/products/products.service';
import { Product } from 'src/app/modules/core/models/product.model';
import { CustomValidator } from 'src/app/utils/validators';
import { finalize } from 'rxjs/operators';
import { FirebaseStorageService } from 'src/app/modules/core/services/firebaseStorage/firebase-storage.service';
import { Observable } from 'rxjs';
import {
  AngularFireUploadTask,
  AngularFireStorageReference
} from '@angular/fire/storage';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {
  form: FormGroup;
  file: File;
  filename: string;
  localImageURL: any;
  uploadPercent: Observable<number>;
  fileRef: AngularFireStorageReference;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private firebaseStorage: FirebaseStorageService
  ) {
    this.initForm();
  }

  ngOnInit() {}

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null, [Validators.required]],
      title: [null, [Validators.required]],
      price: [null, [Validators.required, CustomValidator.isPriceValid]],
      image: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  prepareProduct(): void {
    if (this.form.valid) {
      this.uploadImage();
      this.uploadPercent.subscribe(percent => {
        if (percent === 100) {
          this.fileRef.getDownloadURL().subscribe((URL: string) => {
            this.form.get('image').setValue(URL);
          });
        }
      });
    }
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    this.prepareProduct();
    const product: Product = this.form.value;
    this.productService.postProduct(product).subscribe(() => {
      this.router.navigate(['/admin/products']);
    });
  }

  get priceField() {
    return this.form.get('price');
  }

  fileChange(event: any): void {
    const fileReader = new FileReader();
    this.file = event.target.files[0];
    this.filename = this.file.name;
    fileReader.readAsDataURL(this.file);
    this.renderImage(fileReader);
  }

  renderImage(reader: FileReader): void {
    reader.onload = () => {
      this.localImageURL = reader.result;
    };
  }

  uploadImage(): void {
    this.fileRef = this.firebaseStorage.fileReference(this.filename);
    const task = this.firebaseStorage.uploadBlob(this.fileRef, this.file);
    this.uploadPercent = task.percentageChanges();
  }
}
