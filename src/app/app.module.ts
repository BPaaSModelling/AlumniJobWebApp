import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatListModule,
  MatRadioModule
} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {InsertJOService} from "./admin-insert-joboffer.service";
import {AdminInsertJobofferComponent} from "./admin-insert-joboffer/admin-insert-joboffer.component";
import {ValueInsertComponent} from "./insert-types/value-insert/value-insert.component";
import {SingleselectInsertComponent} from "./insert-types/singleselect-insert/singleselect-insert.component";
import {MultiselectInsertComponent} from "./insert-types/multiselect-insert/multiselect-insert.component";
import {SearchInsertComponent} from "./insert-types/search-insert/search-insert.component";

const appRoutes: Routes = [
  {
    path: 'admin/insertJobOffer',
    component: AdminInsertJobofferComponent,
  },

];


@NgModule({
  declarations: [
    AppComponent,
    AdminInsertJobofferComponent,
    SearchInsertComponent,
    MultiselectInsertComponent,
    SingleselectInsertComponent,
    ValueInsertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    JsonpModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  providers: [InsertJOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
