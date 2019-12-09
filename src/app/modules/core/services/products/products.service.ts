import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = environment.url_api;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/products/${id}`);
  }

  postProduct(product: Product): Observable<any> {
    return this.http.post(`${this.url}/products`, product);
  }

  putProduct(id: string, product: Partial<Product>): Observable<any> {
    return this.http.put(`${this.url}/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.url}/products/${id}`);
  }
}
