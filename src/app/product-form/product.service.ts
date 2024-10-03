import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/products';  // Adjust the API URL as necessary

  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, product);
  }

  // For Section 10 - Fetch, Update, and Delete products
  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
  