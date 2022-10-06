import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private URL_EMPLOYEE = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployee(): Observable<any> {
    return this.httpClient.get(this.URL_EMPLOYEE);
  }

  delete(id: number): Observable<Employee>  {
    return this.httpClient.delete(this.URL_EMPLOYEE + '/' + id);
  }

  add(employee: Employee) {
    return this.httpClient.post(this.URL_EMPLOYEE, employee);
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get(this.URL_EMPLOYEE + '/' + id);
  }

  edit(id: number, employee: Employee) {
    return this.httpClient.patch(this.URL_EMPLOYEE + '/' + id, employee);
  }
}
