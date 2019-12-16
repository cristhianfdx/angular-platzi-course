import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from '../../models/product.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import * as Sentry from '@sentry/browser';

import { environment } from '../../../../../environments/environment';

interface User {
  id: string;
  email: string;
  phone: string;
}

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

  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as User[])
    );
  }

  getFile() {
    return this.http.get('./assets/files/test.txt', {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    Sentry.captureException(error);
    return throwError('upss!!');
  }
}
