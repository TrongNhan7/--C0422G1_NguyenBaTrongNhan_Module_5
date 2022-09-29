import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CusListComponent} from './cus-list/cus-list.component';
import {CusCreateComponent} from './cus-create/cus-create.component';
import {CusEditComponent} from './cus-edit/cus-edit.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'cus-list', component: CusListComponent},
  {path: 'cus-create', component: CusCreateComponent},
  {path: 'cus-edit/:id', component: CusEditComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
