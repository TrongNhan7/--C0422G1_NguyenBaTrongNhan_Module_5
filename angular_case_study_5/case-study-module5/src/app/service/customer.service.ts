import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      id: 1,
      name: 'Hùng hay kẻ',
      birthday: '12/10/2001',
      gender: 'Nam',
      idCard: '6969696969',
      phone: '0905000000',
      email: 'Hungthichbay@gmail.com',
      customerType: {id: 1, name: 'Diamond'},
      address: 'Cái nhà giàu nhất Quận 3, Đà Nẵng'
    }
  ];

  constructor() {
  }

  getAllCustomer() {
    return this.customers;
  }

  saveCustomer(customer) {
    this.customers.push(customer);
  }
}
