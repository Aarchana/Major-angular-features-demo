import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public list$: Observable<Product[]>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.list$ = this.productService.getList();
  }

}
