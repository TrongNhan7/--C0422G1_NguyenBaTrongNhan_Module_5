import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';



@NgModule({
  declarations: [EmpListComponent, EmpCreateComponent, EmpEditComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
