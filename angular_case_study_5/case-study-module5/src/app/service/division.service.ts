import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Division} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private URL_DIVISION = 'http://localhost:3000/division';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Division[]> {
    return this.http.get<Division[]>(this.URL_DIVISION);
  }

  findById(id: number): Observable<Division> {
    return this.http.get<Division>(this.URL_DIVISION + '/' + id);
  }
}
