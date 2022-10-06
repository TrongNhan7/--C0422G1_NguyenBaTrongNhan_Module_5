import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_PRODUCT = 'http://localhost:3000/products';
  private URL_CATEGORY = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_PRODUCT);
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.URL_CATEGORY);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.URL_PRODUCT, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.URL_PRODUCT + '/' + id);
  }

  findByIdCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.URL_CATEGORY + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.URL_PRODUCT + '/' + id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.URL_PRODUCT + '/' + id);
  }
}
