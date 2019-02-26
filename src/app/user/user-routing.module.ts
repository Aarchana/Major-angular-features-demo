import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path: '', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'cart', component: UserCartComponent,  canActivate: [AuthGuard]},
  {path: 'orders', component: UserOrdersComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
