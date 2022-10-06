import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DiaDiem} from '../model/dia-diem';

@Injectable({
  providedIn: 'root'
})
export class DiaDiemService {
  private URL_DIADIEM = 'http://localhost:8080/diaDiemRest';

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<DiaDiem[]> {
    return this.http.get<DiaDiem[]>(this.URL_DIADIEM);
  }

  findById(id: number): Observable<DiaDiem> {
    return this.http.get<DiaDiem>(this.URL_DIADIEM + '/' + id);
  }
}
