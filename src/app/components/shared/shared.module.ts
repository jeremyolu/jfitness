import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { NotificationBannerComponent } from './notification-banner/notification-banner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    SubscriptionFormComponent,
    LoaderComponent,
    NotificationBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ HeaderComponent, LoaderComponent, SubscriptionFormComponent, NotificationBannerComponent]
})
export class SharedModule { }
