import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from '../auth/auth.guard';
import { DetailResolverService } from './detail-resolver.service';

const routes: Routes = [
  {path: 'products', component: ProductListComponent, canActivateChild: [AuthGuard],
    children: [
      { path: ':id', component: ProductDetailComponent, resolve: {
        product: DetailResolverService
      }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
