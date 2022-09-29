import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "./login";

let id = 2;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  logins: Login[] = [
    {
      id: 1,
      email: 'Hunghamhut@gmail.com',
      password: '123456'
    }
  ]
  login: Login;

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    this.login = this.loginForm.value;
    this.login.id = id++;
    this.logins.push(this.login);
    console.log(this.logins);
  }
}
