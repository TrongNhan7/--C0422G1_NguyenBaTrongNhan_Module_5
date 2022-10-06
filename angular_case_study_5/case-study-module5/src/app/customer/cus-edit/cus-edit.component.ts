import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-cus-edit',
  templateUrl: './cus-edit.component.html',
  styleUrls: ['./cus-edit.component.css']
})
export class CusEditComponent implements OnInit {
  customerForm: FormGroup | any;
  customerTypeList: CustomerType[] = [];
  customerEdit: Customer;
  id: number;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getAll();
    this.customerForm = new FormGroup({
      customerName: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*(\\s[A-Z][a-zA-Z]*)*$')]),
      birthday: new FormControl('', [Validators.required, this.regexBirthday]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.pattern('^[0-9]{9,11}$')]),
      phone: new FormControl('', this.phoneValidator),
      email: new FormControl('', [Validators.required, Validators.email]),
      customerType: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
    this.customerEdit = this.customerService.findById(this.id);
    console.log(this.customerEdit);
    this.customerForm.patchValue(this.customerEdit);
    this.customerForm.patchValue({customerType: this.customerEdit.customerType.id});
    console.log(this.customerEdit);

  }

  submitEdit(id: number) {
    this.customerEdit = this.customerForm.value;
    this.customerEdit.customerType = this.customerTypeService.findById(this.customerForm.value.customerType);
    this.customerEdit.id = this.id;
    this.customerService.editCustomer(this.customerEdit);
    this.router.navigateByUrl('customer/cus-list');
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
