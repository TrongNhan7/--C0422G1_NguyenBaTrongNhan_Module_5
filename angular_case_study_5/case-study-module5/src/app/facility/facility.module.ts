import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FacListComponent} from './fac-list/fac-list.component';
import {FacCreateComponent} from './fac-create/fac-create.component';
import {FacEditComponent} from './fac-edit/fac-edit.component';
import {FacilityRoutingModule} from "./facility-routing.module";
import { FacDetailComponent } from './fac-detail/fac-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [FacListComponent, FacCreateComponent, FacEditComponent, FacDetailComponent],
  exports: [
    FacListComponent, FacCreateComponent, FacEditComponent
  ],
    imports: [
        CommonModule,
        FacilityRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class FacilityModule {
}
