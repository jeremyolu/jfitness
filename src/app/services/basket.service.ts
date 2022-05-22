import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  addToBasket(product: IProduct) {
    
  }
}
