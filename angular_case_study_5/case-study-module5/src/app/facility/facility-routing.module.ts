import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FacListComponent} from './fac-list/fac-list.component';
import {FacCreateComponent} from './fac-create/fac-create.component';
import {FacEditComponent} from './fac-edit/fac-edit.component';
import {FacDetailComponent} from './fac-detail/fac-detail.component';

const routes: Routes = [
  {path: 'fac-list', component: FacListComponent},
  {path: 'fac-create', component: FacCreateComponent},
  {path: 'fac-detail/:id', component: FacDetailComponent},
  {path: 'fac-edit/:id', component: FacEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
