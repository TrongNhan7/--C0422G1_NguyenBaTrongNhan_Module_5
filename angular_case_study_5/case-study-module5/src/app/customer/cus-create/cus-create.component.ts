import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cus-create',
  templateUrl: './cus-create.component.html',
  styleUrls: ['./cus-create.component.css']
})
export class CusCreateComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerName: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*(\\s[A-Z][a-zA-Z]*)*$')]),
    birthday: new FormControl('', [Validators.required, this.regexBirthday]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.pattern('^[0-9]{9,11}$')]),
    phone: new FormControl('', this.phoneValidator),
    email: new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });
  customer: Customer;
  customerTypeList: CustomerType[] = [];


  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,
              private router: Router) {
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
    this.customer.id = this.customerService.getId();
    this.customerService.saveCustomer(this.customer);
    this.router.navigateByUrl('customer/cus-list');
    console.log(this.customerForm.value);
    console.log(this.customerForm.value.customerType);
    this.customerForm.reset();
  }

  regexBirthday(control: AbstractControl): ValidationErrors | null {
    const valueDay = control.value;
    const current = new Date().getFullYear();
    const birthday = new Date(valueDay).getFullYear();
    const age = current - birthday;
    if (isNaN(age)) {
      return {ageFalse: true};
    }
    if (age < 18) {
      return {ageFalse: true};
    }
    return null;
  }

  phoneValidator(control: AbstractControl) {
    const phoneRegex = new RegExp('^(090|091)[0-9]{7}$');
    if (phoneRegex.test(control.value)) {
      return null;
    } else {
      return {phoneValidator: true};
    }
  }
}
