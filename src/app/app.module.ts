import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdInputModule} from "@angular/material";
import { AdminInsertJobOfferComponent } from './admin-insert-job-offer/admin-insert-job-offer.component';
import {BackendService} from "./backend.service";
import {RouterModule, Routes} from "@angular/router";
import { AdminListJobOffersComponent } from './admin-list-job-offers/admin-list-job-offers.component';

const appRoutes: Routes = [
  {
    path: 'admin/insert',
    component: AdminInsertJobOfferComponent,
  },
  {
    path: 'admin/list',
    component: AdminListJobOffersComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    AdminInsertJobOfferComponent,
    AdminListJobOffersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
