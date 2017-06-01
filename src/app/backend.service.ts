import { Injectable } from '@angular/core';
import {JobOfferModel} from "./_model/joboffer.model";
import {Http, RequestOptions} from "@angular/http";

@Injectable()
export class BackendService {

  private headers;
  private options;

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

        }, error => console.log('error'))
  }

}
