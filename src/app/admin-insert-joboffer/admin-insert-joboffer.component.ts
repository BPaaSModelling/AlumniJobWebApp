import { Component, OnInit } from '@angular/core';
import {JobOfferModel} from "../_model/JobOffer.model";
import {InsertJOService} from "../admin-insert-joboffer.service";

@Component({
  selector: 'app-admin-insert-joboffer',
  templateUrl: './admin-insert-joboffer.component.html',
  styleUrls: ['./admin-insert-joboffer.component.css']
})
export class AdminInsertJobofferComponent implements OnInit {

  public jobOffer: JobOfferModel= new JobOfferModel();
  private joLabel: string = '';
  private status: string;

  constructor(
      private insertService: InsertJOService
  ){
    this.insertService.queryJOModel();
    //insertService.defineDomains(insertService.cloudService);
  }
  ngOnInit() {

  }



  public createJO(): void{
    status = this.insertService.createJobOffer(this.joLabel);
    if (status = "OK"){
      alert("JobOffer added successfully!")
      location.reload();
    }
  }
}
