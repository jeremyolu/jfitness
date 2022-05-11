import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProduct } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseUrl: string = "https://products.jeremyolu.com/api";

  getProducts() : Observable<any>{
    return this.httpClient.get<IProduct>(this.baseUrl + "/products")
    .pipe(map((data: any) => data.items));
  }

  getPopularProducts() {

  }

  getMensProducts() {

  }

  getWomensProducts() {

  }

  getProductsByName(name: string) : Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + "/products?name=" + name);
  }
  
}
