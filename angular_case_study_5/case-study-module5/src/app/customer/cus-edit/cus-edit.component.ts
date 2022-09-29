import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-cus-edit',
  templateUrl: './cus-edit.component.html',
  styleUrls: ['./cus-edit.component.css']
})
export class CusEditComponent implements OnInit {
  idCustomer: number;
  customer: Customer | any;
  customerForm: FormGroup | any;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.customer = this.customerService.findById(Number(paramMap.get('id')));
    });
    this.customerTypeList = this.customerTypeService.getAll();
    this.customerForm = new FormGroup({
      id: new FormControl(this.customer.id),
      name: new FormControl(this.customer.name),
      birthday: new FormControl(this.customer.birthday),
      gender: new FormControl(this.customer.gender),
      idCard: new FormControl(this.customer.idCard),
      phone: new FormControl(this.customer.phone),
      email: new FormControl(this.customer.email),
      customerType: new FormControl(this.customer.customerType.id),
      address: new FormControl(this.customer.address)
    });
    console.log(this.customerForm.value);
  }

  submitEdit() {
    this.customer = this.customerForm.value;
    this.customer.customerType = this.customerTypeService.findById(this.customerForm.value.customerType);
    this.customerService.editCustomer(this.customer);
  }

}
