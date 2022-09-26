import {Injectable} from '@angular/core';
import {CustomerType} from '../model/customer-type';


@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypes: CustomerType[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinum'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'},
  ];

  constructor() {
  }

  getAll() {
    return this.customerTypes;
  }

  findById(id: number): CustomerType {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customerTypes.length; i++) {
      if ((this.customerTypes)[i].id === id) {
        return this.customerTypes[i];
      }
    }
    return null;
  }
}
