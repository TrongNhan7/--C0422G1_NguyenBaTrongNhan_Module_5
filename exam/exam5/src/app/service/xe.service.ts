import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Xe} from '../model/xe';

@Injectable({
  providedIn: 'root'
})
export class XeService {
  private URL_XE = 'http://localhost:8080/xeRest';

  constructor(private http: HttpClient) {
  }

  getAll(keyword: string, page: number): Observable<any> {
    console.log(page);
    return this.http.get(this.URL_XE + '?page=' + page + '&keyword=' + keyword);
  }

  update(xe: Xe): Observable<Xe> {
    return this.http.patch<Xe>(this.URL_XE + '/update', xe);
  }

  add(xe: Xe): Observable<Xe> {
    return this.http.post<Xe>(this.URL_XE + '/create', xe);
  }

  delete(id: number) {
    return this.http.delete(this.URL_XE + '/delete/' + id);
  }

  findById(id: number): Observable<Xe> {
    return this.http.get<Xe>(this.URL_XE + '/' + id);
  }


}
