import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  data: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadProducts();

  }

  loadProducts() {
    this.dataService.getProducts().subscribe((data: IProduct[]) => this.data = data);
  }

}
