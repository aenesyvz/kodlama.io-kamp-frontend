import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

import { Product } from '../modules/product';
import { ListResponseModel } from '../modules/listResponseModel';
import { ResponseModul } from '../modules/responseModul';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44388/api/';
  constructor(private httpClient:HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/GetAll";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/GetByCategory?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModul>{
    return this.httpClient.post<ResponseModul>(this.apiUrl + "products/add", product);
  }
}
