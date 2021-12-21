import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductList } from 'src/interfaces/ProductList';
import { catchError, map, tap } from 'rxjs/operators';
import { Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  

  private heroesUrl = 'fake-api/productList';  // URL to web api


  constructor(private http:HttpClient) {
  }
  /** GET heroes from the server */

  getProduct():Observable<ProductList[]>{
    return this.http.get<ProductList[]>('fake-api/productList');
  }
  
}
