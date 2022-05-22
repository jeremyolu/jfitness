import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { BasketComponent } from './pages/basket/basket.component';
import { HomeComponent } from './pages/home/home.component';
import { MensComponent } from './pages/mens/mens.component';
import { SaleComponent } from './pages/sale/sale.component';
import { SearchComponent } from './pages/search/search.component';
import { WomensComponent } from './pages/womens/womens.component';

const routes: Routes = [
{
  path: "", component: HomeComponent
},
{
path: "home", component: HomeComponent
},
{
path: "mens", component: MensComponent
},
{
  path: "womens", component: WomensComponent
},
{
  path: "accessories", component: AccessoriesComponent
},
{
  path: "sale", component: SaleComponent
},
{
  path: "search", component: SearchComponent
},
{
  path: "basket", component: BasketComponent
},
{
  path: "register", component: RegisterComponent
},
{
  path: "login", component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
