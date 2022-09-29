import {Component, OnInit} from '@angular/core';
import {Register} from "../register";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

let id = 2;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  // @ts-ignore
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [this.regexAge]),
    gender: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')])
  }, this.comparePassword);

  register: Register;
  // @ts-ignore
  registers: Register[] = [
    {
      id: 1,
      email: 'HungKut3@gmail.com',
      password: '123',
      confirmPassword: '123',
      country: 'VN',
      age: '2000/02/02',
      gender: true,
      phone: '09050009999'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    this.register = this.registerForm.value;
    this.register.id = id++;
    this.registers.push(this.register);
    console.log(this.registers);
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ?
      null : {
        passWordNotMatch: true
      };
  }

  regexAge(control: AbstractControl): ValidationErrors | null {
    const a = control.value;
    let current = new Date().getFullYear();
    let birthday = new Date(a).getFullYear();
    let age = current - birthday;
    if (isNaN(age)) {
      return {'ageFalse': true}
    }
    if (age < 18) {
      return {'ageFalse': true}
    }
    return null;
  }
}
