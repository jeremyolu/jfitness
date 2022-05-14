import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  notificationTxt: string = "breaking news";

  products: IProduct[] = [];

  isProductsLoading: boolean = true;

  headerSettings : any = {
    title: "no more excuses",
    subHeading: "this is sub heading",
    tagHeading: "this is new heading"
  }

  headerTitle: string = "";
  headerSubHeading: string = "";
  headerTagHeading: string = "";

  subscriptionTitle: string = "SUBSCRIPTION";
  subscriptionDescription: string = "subscribe today for exclusive offers and discounts";

  loaderMessage: string = "Loading Products...";

  ngOnInit(): void {
    this.loadProducts();

    this.setUpHeader();
  }

  loadProducts() : void{
    this.dataService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data;
      this.isProductsLoading = false;
    });
  }

  test() {
    alert("hello");
  }

  setUpHeader() : void {
    this.headerTitle = this.headerSettings.title;
    this.headerSubHeading = this.headerSettings.subHeading;
    this.headerTagHeading = this.headerSettings.tagHeading;
  }

}
