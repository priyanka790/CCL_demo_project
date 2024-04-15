import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMenu, IStorage } from './common.interface';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getMenu() {
    return this.http.get<IMenu[]>(this.API_URL + 'menu');
  }
  getStorage(){
     return this.http.get<IStorage[]>(this.API_URL + 'storage');
  }
  delete(id:number){
    return this.http.delete<IStorage>(this.API_URL + 'storage/'  + id);
  }
}
