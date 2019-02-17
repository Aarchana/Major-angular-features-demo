import { Injectable } from '@angular/core';
import { ProductDetail } from './product';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolverService implements Resolve<ProductDetail> {

  constructor(private productService: ProductService, private router: Router ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductDetail | Observable<ProductDetail> | Promise<ProductDetail> {
    return this.productService.getDetail(+route.paramMap.get('id'));
  }
}
