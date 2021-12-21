import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductList } from 'src/interfaces/ProductList';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const productList = [{id:1,description:"DELL"}
    ,{id:2,description:"ASUS"},
    {id:1,description:"DELL"},
    {id:1,description:"DELL"},
    {id:1,description:"DELL"},
    {id:1,description:"DELL"},
    {id:1,description:"DELL"},
    {id:1,description:"DELL"}] ;
    return {productList};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
}