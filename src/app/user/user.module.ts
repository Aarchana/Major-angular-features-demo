import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { UserCartComponent } from './user-cart/user-cart.component';

@NgModule({
  declarations: [UserProfileComponent, UserOrdersComponent, UserCartComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [UserProfileComponent, UserOrdersComponent, UserCartComponent]
})
export class UserModule { }
