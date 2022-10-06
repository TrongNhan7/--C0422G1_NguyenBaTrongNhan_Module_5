import {Injectable} from '@angular/core';
import {Test} from "../model/test";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private URL_TEST = 'http://localhost:3000/tests';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Test[]> {
    return this.http.get<Test[]>(this.URL_TEST);
  }
}
