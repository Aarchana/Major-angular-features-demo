import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public list$: Observable<Product[]>;
  public counter: number = 0;
  @ViewChild(ProductDetailComponent)
  productDetailComponent: ProductDetailComponent;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.list$ = this.productService.getList();
  }

  public addOrRemove(isAdd  : boolean) {
    if(isAdd) {
      this.counter++;
    } else {
      if(this.counter > 0)
      this.counter--;
    }
  }

}
