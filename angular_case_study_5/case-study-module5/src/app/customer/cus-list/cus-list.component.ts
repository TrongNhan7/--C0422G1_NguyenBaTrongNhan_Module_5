import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-cus-list',
  templateUrl: './cus-list.component.html',
  styleUrls: ['./cus-list.component.css']
})
export class CusListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.customers = this.customerService.getAllCustomer();
  }
}
