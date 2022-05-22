import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  maleProducts: IProduct[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadProducts();

   

  }

  loadProducts() {
    this.dataService.getMensProducts().subscribe((data: IProduct[]) => {
      this.maleProducts = data;
    });
  }

}
