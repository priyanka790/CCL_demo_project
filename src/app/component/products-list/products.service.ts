import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  PROD_URL = "https://api.escuelajs.co/api/v1/"

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<IProducts[]>(this.PROD_URL + 'products')
  }
}
