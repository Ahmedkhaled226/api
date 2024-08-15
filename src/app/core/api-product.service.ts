import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  constructor(private readonly _HttpClient :HttpClient) { 

  }
  
getProduct():Observable<any>{
  return this._HttpClient.get('https://fakestoreapi.com/products')
}


  
}
