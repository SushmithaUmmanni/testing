import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepatmentOverviewComponent } from './depatment-overview/depatment-overview.component';
import { DepatmentContactComponent } from './depatment-contact/depatment-contact.component';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   PageNotFoundComponent,
   DepartmentDetailsComponent,
   DepartmentDetailComponent,
   DepatmentOverviewComponent,
   DepatmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
