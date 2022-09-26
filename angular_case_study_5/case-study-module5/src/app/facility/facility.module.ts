import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacListComponent} from './fac-list/fac-list.component';
import {FacCreateComponent} from './fac-create/fac-create.component';
import {FacEditComponent} from './fac-edit/fac-edit.component';

@NgModule({
  declarations: [FacListComponent, FacCreateComponent, FacEditComponent],
  exports: [
    FacListComponent, FacCreateComponent, FacEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacilityModule {
}
