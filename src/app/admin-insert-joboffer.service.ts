import {Injectable} from '@angular/core';
import {JobOfferModel} from "./_model/JobOffer.model";
import {JobOfferElementModel} from "./_model/JobOfferElement.model";
import {Observable} from "rxjs/Rx";
import {SearchResultModel} from "./_model/SearchResult.model";
import {Http, Jsonp, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {VariableSettings} from "./_settings/variable.settings";
import {EndpointSettings} from "./_settings/endpoint.settings";

@Injectable()
export class  InsertJOService {

    joModel: JobOfferModel;
    joFields: JobOfferElementModel[] = [];

    public joField$: Observable<JobOfferElementModel[]> = Observable.of([]);
    searchResults$: Observable<SearchResultModel[]> = Observable.of([]);
    private options: RequestOptions;
    private variables: VariableSettings;

    constructor(
        private http: Http,
        private jsonp: Jsonp) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
        this.variables = new VariableSettings;
    }

    queryJOModel(): void {

        this.http.get(EndpointSettings.getJobOfferElementsEndpoint())
            .map(response => response.json()).subscribe(
            data => {
                console.log('Job offers received: ' + JSON.stringify(data));
                this.joField$ = Observable.of(data);
                this.joFields = data;
                console.log('Elements parsing with success!');

            }, error => console.log('Could not query joboffer fields'));

    }

    public search(ns: string, term: string) {

        console.log("search received: " + ns +" :: " + term);

        let search: URLSearchParams = new URLSearchParams();
        search.set('ns', ns);
        search.set('search', term);
        console.log('sending: ' + search.get('ns')  + ' - ' + search.get('search'));
        this.http.get(EndpointSettings.getSearchEndpoint(), { search: search })
            .map(response => response.json()).subscribe(

            data => {

                console.log("searchResults " +JSON.stringify(data));
                this.searchResults$ = Observable.of(data);


            }, error => console.log('Could not query services'));

    }

    public modifyJOElement(JOElement: JobOfferElementModel){
        for (let i = 0; i < this.joFields.length; i++){
            if (JOElement.propertyURI == this.joFields[i].propertyURI){
                this.joFields[i] = JOElement;
            }
        }
    }
    public createJobOffer(joLabel: string): string{
        this.joModel = new JobOfferModel();
        this.joModel.label = joLabel;
        this.joModel.elements = this.joFields;

        let result: string ="";
        this.http.post(EndpointSettings.getInsertJobOfferEndpoint(), JSON.stringify(this.joModel))
            .map(response => response.json()).subscribe(
            data => {
                result = "OK";

            }, error =>
                result = "ERROR"
        );

        return result;
    }

}