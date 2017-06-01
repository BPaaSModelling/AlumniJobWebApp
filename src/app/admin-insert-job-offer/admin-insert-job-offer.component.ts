import { Component, OnInit } from '@angular/core';
import {JobOfferModel} from "../_model/joboffer.model";

@Component({
  selector: 'app-admin-insert-job-offer',
  templateUrl: './admin-insert-job-offer.component.html',
  styleUrls: ['./admin-insert-job-offer.component.css']
})
export class AdminInsertJobOfferComponent implements OnInit {

  private jobOfferModel:JobOfferModel;

  constructor() {
    this.jobOfferModel = new JobOfferModel();
  }

  ngOnInit() {
  }

  private submitForm():void{
    console.log("this is the content " +JSON.stringify(this.jobOfferModel));

  }

}
