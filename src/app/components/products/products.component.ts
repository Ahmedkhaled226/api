import { IProduct, Iproduct } from './../../core/iproduct';
import { Component, inject, OnInit } from '@angular/core';
import { ApiProductService } from '../../core/api-product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
 constructor(private  _ApiProductService:ApiProductService){

 } 

products:IProduct[]=[]


ngOnInit(): void {
  this._ApiProductService.getProduct().subscribe({
    next: (data) => this.products=data,
    error: (error) => this.products=error
  })
}



}
