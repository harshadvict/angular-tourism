import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  constructor(private httpclient:HttpClient) { }
  city:string="paris";
  
  
  getPlace(): Observable<any>{
    let value: string = "Wasington";
   const httpOptions = {
      headers: {'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': '6c64f84671msh0365b3fb356cf43p181debjsn752cbbb2d757'},
      params: {'query': value}
    };
    const place="USA"
    return this.httpclient.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/", httpOptions);
  }
}
