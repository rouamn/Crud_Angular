import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/product/';
  baseUrlCard="http://localhost:3000/card/"

  constructor(private http: HttpClient) { }
  addProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, data);
  }
   getAllProduct()
   {
      return this.http.get(this.baseUrl);

   }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
  updateProduct(id: number, data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, data);
  }
  addToCart(data: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrlCard, data);
  }
  getCart()
  {
    return this.http.get(this.baseUrlCard);

  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }



}
