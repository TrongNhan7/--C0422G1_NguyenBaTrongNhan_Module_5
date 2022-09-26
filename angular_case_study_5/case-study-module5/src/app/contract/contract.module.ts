import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConListComponent } from './con-list/con-list.component';
import { ConCreateComponent } from './con-create/con-create.component';
import { ConEditComponent } from './con-edit/con-edit.component';



@NgModule({
  declarations: [ConListComponent, ConCreateComponent, ConEditComponent],
  exports: [
    ConListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContractModule { }
