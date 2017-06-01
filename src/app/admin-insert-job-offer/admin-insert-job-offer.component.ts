import { Component, OnInit } from '@angular/core';
import {JobOfferModel} from "../_model/joboffer.model";
import {BackendService} from "../backend.service";

@Component({
  selector: 'app-admin-insert-job-offer',
  templateUrl: './admin-insert-job-offer.component.html',
  styleUrls: ['./admin-insert-job-offer.component.css']
})
export class AdminInsertJobOfferComponent implements OnInit {

  private jobOfferModel:JobOfferModel;

  constructor(
    private backendService:BackendService
  ) {
    this.jobOfferModel = new JobOfferModel();
  }

  ngOnInit() {
  }

  private submitForm():void{
    this.backendService.addJobOffer(this.jobOfferModel);

  }

}
