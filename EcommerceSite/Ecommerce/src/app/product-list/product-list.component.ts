import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/interfaces/ProductList';
import { ProductServiceService } from '../services/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  ps: ProductList[] = [];
  constructor(private pss:ProductServiceService) { }

            
  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void {

    this.pss.getProduct().subscribe(ps => this.ps = ps) ; 

  }
}
