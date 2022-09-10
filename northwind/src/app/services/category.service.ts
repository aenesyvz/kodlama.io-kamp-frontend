import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { Category } from '../modules/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:44388/api/categories/GetAll';
  constructor(private httpClient:HttpClient) { }
  
  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
