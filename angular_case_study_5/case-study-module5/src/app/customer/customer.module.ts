import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CusListComponent } from './cus-list/cus-list.component';
import { CusCreateComponent } from './cus-create/cus-create.component';
import { CusEditComponent } from './cus-edit/cus-edit.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    declarations: [CusListComponent, CusCreateComponent, CusEditComponent],
  exports: [
    CusListComponent,
    CusCreateComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CustomerModule { }
