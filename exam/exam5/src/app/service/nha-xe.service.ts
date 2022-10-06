import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NhaXe} from '../model/nha-xe';
import {Xe} from '../model/xe';

@Injectable({
  providedIn: 'root'
})
export class NhaXeService {
  private URL_NHAXE = 'http://localhost:8080/nhaXeRest';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<NhaXe[]> {
    return this.http.get<NhaXe[]>(this.URL_NHAXE);
  }

  findById(id: number): Observable<NhaXe> {
    return this.http.get<NhaXe>(this.URL_NHAXE + '/' + id);
  }

  update(nhaXe: NhaXe): Observable<NhaXe> {
    return this.http.patch<NhaXe>(this.URL_NHAXE + '/update', nhaXe);
  }
}
