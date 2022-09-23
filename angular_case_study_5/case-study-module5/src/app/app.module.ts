import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './facility/list/list.component';
import { FacListComponent } from './facility/fac-list/fac-list.component';
import { FacCreateComponent } from './facility/fac-create/fac-create.component';
import { FacEditComponent } from './facility/fac-edit/fac-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FacListComponent,
    FacCreateComponent,
    FacEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
