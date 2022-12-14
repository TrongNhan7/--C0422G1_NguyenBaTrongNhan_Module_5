import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [
    {
      id: 1,
      customerName: 'Hùng hay kẻ',
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

  findById(id: number): Customer {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customers.length; i++) {
      if ((this.customers)[i].id === id) {
        return this.customers[i];
      }
    }
    return null;
  }

  getId(): number {
    let id = 0;
    let max = 0;
    if (this.customers == null) {
      return id = 1;
    } else {
      for (const customer of this.customers) {
        if (customer.id > max) {
          max = customer.id;
        }
      }
    }
    return id = max + 1;
  }

  editCustomer(customer: Customer): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === customer.id) {
        this.customers.splice(i, 1, customer);
      }
    }
  }

  deleteById(id: number) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers.splice(i, 1);
      }
    }
  }
}
