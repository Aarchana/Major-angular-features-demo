import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductDetail } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getList() {
    return this.httpClient.get<Product[]>('http://localhost:4200/products');
  }

  public getDetail(id: number): Observable<ProductDetail>  {
    return this.httpClient.get<ProductDetail>('http://localhost:4200/product/' + id);
  }
}
