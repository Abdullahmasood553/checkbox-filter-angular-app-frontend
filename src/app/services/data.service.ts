import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  select_categories: any = [];
  
  constructor(private http: HttpClient) { }

  getProducts() { 
    return this.http.get(environment.apiUrl + `/products`);
  }

  getFilteredProducts(data:any) {   
     return this.http.post(environment.apiUrl + `/products/fetch_multiple_products`, data);
  }
}
