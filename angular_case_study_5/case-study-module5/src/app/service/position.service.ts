import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PositionEmployee} from '../model/positionEmployee';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private URL_POSITION = 'http://localhost:3000/positionEmployees';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<PositionEmployee[]> {
    return this.http.get<PositionEmployee[]>(this.URL_POSITION);
  }

  findById(id: number): Observable<PositionEmployee> {
    return this.http.get<PositionEmployee>(this.URL_POSITION + '/' + id);
  }
}
