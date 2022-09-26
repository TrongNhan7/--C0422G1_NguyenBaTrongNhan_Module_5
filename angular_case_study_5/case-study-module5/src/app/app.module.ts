import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FacilityTypeService} from './service/facility-type.service';
import {RentTypeService} from './service/rent-type.service';
import {CustomerTypeService} from './service/customer-type.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CustomerModule} from './customer/customer.module';
import {FacilityModule} from './facility/facility.module';
import {ContractModule} from './contract/contract.module';
import {CustomerService} from './service/customer.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    FacilityModule,
    ContractModule
  ],
  providers: [FacilityTypeService,
    RentTypeService,
    CustomerTypeService,
    CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
