import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';
import { Product } from '@core/models/product.model';

import { environment } from '../../../../../environments/environment';

describe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;
  const url = environment.url_api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getProducts method', () => {
    it('should return products', () => {
      // arrange
      const expectData = [
        {
          id: '1',
          title: 'title',
          price: 1234,
          description: 'Description',
          image: 'image'
        },
        {
          id: '2',
          title: 'title2',
          price: 1234,
          description: 'Description2',
          image: 'image2'
        }
      ];
      let dataError;
      let dataResponse;

      // Act
      service.getProducts().subscribe(
        response => {
          dataResponse = response;
        },
        error => {
          dataError = error;
        }
      );

      // Assert
      const request = httpTestingController.expectOne(`${url}/products`);
      request.flush(expectData);

      expect(dataResponse.length).toEqual(2);
      expect(request.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
