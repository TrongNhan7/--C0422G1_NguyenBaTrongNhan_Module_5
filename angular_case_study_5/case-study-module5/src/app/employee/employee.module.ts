import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmpListComponent} from './emp-list/emp-list.component';
import {EmpCreateComponent} from './emp-create/emp-create.component';
import {EmpEditComponent} from './emp-edit/emp-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeRoutingModule} from './employee-routing.module';





@NgModule({
  declarations: [EmpListComponent, EmpCreateComponent, EmpEditComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class EmployeeModule { }
