import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-cus-create',
  templateUrl: './cus-create.component.html',
  styleUrls: ['./cus-create.component.css']
})
export class CusCreateComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    customerType: new FormControl(),
    address: new FormControl()
  });
  customer: Customer;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getCustomerType();
  }

  getCustomerType() {
    this.customerTypeList = this.customerTypeService.getAll();
  }


  submit() {
    this.customer = this.customerForm.value;
    this.customer.customerType = this.customerTypeService.findById(this.customerForm.value.customerType);
    this.customerService.saveCustomer(this.customer);
    console.log(this.customerForm.value);
    console.log(this.customerForm.value.customerType);
    this.customerForm.reset();
  }
}
