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

  currencyType: string = "GBP";

  getProducts() : Observable<any> {
    return this.httpClient.get<IProduct>(this.baseUrl + "/products")
    .pipe(map((data: any) => data.items));
  }

  getProductById(id: number) : Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/products?id=" + id);
  }

  getProductsByName(name: string) : Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/products?name=" + name);
  }

  getMensProducts() : Observable<any> {
    return this.httpClient.get<IProduct>(this.baseUrl + "/products/maleproducts")
    .pipe(map((data: any) => data.items));
  }

  getWomensProducts() : Observable<any> {
    return this.httpClient.get<IProduct>(this.baseUrl + "/products/femaleproducts")
    .pipe(map((data: any) => data.items));
  }

  getSaleProducts() : Observable<any> {
    return this.httpClient.get<IProduct>(this.baseUrl + "/products/saleproducts")
    .pipe(map((data: any) => data.items));
  }
  
}
