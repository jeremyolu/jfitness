import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../components/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SaleComponent } from './sale/sale.component';
import { BasketComponent } from './basket/basket.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    MensComponent,
    WomensComponent,
    AccessoriesComponent,
    SaleComponent,
    BasketComponent,
    SearchComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
