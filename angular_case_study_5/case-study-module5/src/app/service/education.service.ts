import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Education} from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private URL_EDUCATION = 'http://localhost:3000/educations';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Education[]> {
    return this.http.get<Education[]>(this.URL_EDUCATION);
  }

  findById(id: number): Observable<Education> {
    return this.http.get<Education>(this.URL_EDUCATION + '/' + id);
  }
}
