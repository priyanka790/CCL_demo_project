import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, IData, IFooter, IMenu, IStorage } from './common.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get<IMenu[]>(this.API_URL + 'menu');
  }
  getStorage() {
    return this.http.get<IStorage[]>(this.API_URL + 'storage');
  }
  postStorage(data: IStorage) {
    return this.http.post<IStorage>(this.API_URL + 'storage', data);
  }
  singleProducts(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YourTokenHere'
    });
    return this.http.get<IStorage>(this.API_URL + 'storage/' + id, {headers:headers});
  }

  updateStorageData(id:number, product: IStorage) {
    return this.http.put<IStorage>(
      `http://localhost:3000/storage/` + id,
      product
    );
  }

  delete(id: number) {
    return this.http.delete<IStorage>(this.API_URL + 'storage/' + id);
  }
  getFooter(){
     return this.http.get<IFooter[]>(this.API_URL + 'footer')
  }
  getProducts():Observable<ApiResponse>{
     return this.http.get<ApiResponse>(this.API_URL + 'products')
  }
  getSingleProducts(id:number):Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.API_URL + 'products' + id)
 }
  deleteProducts(productId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/products/${productId}`);
  }
//   deleteProducts(id:number):Observable<IData>{
//     return this.http.delete<IData>(this.API_URL + 'products/' + id)
//  }
}
