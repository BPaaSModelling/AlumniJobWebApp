import { Injectable } from '@angular/core';
import {JobOfferModel} from "./_model/JobOffer.model";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class BackendService {

  private headers;
  private options;

  private jobOffers:JobOfferModel[] = [];
  public jobOffers$:Observable<JobOfferModel[]> = Observable.of([]);


  constructor(
    private http:Http
  ) {

    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }


  public addJobOffer(jobOfferModel:JobOfferModel):void{
    console.log("let me do something " +JSON.stringify(jobOfferModel));

    this.http.post('http://localhost:8080/admin/addJobOffer', JSON.stringify(jobOfferModel), this.options)
      .map(response => response.json()).subscribe(
        success => {
          console.log('Done' +JSON.stringify(success));
          this.refreshJobOffers();

        }, error => console.log('error'))
  }

  public refreshJobOffers(){
    this.http.get('http://localhost:8080/admin/getJobOffer')
      .map(response => response.json()).subscribe(
      success => {
        console.log('Done joboffer query' +JSON.stringify(success));

        this.jobOffers = success;
        this.jobOffers$ = Observable.of(this.jobOffers);

      }, error => console.log('error'))
  }

}
