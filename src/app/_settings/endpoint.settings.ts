export class EndpointSettings {

  private static ENDPOINT       : string = 'http://localhost:8080';

  private static JOELEMENTS     : string = '/admin/getJobElements';
  private static SEARCH         : string = '/search?';
  private static JOINSERT     : string = '/admin/insertJobElements';


  public static getJobOfferElementsEndpoint(): string {
  return EndpointSettings.ENDPOINT + EndpointSettings.JOELEMENTS;
}
  public static getSearchEndpoint(): string {
    return EndpointSettings.ENDPOINT + EndpointSettings.SEARCH;
  }
  public static getInsertJobOfferEndpoint(): string {
    return EndpointSettings.ENDPOINT + EndpointSettings.JOINSERT;
  }

}
