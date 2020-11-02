import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelDataServiceService {

  constructor(private httpclient:HttpClient) { }
  getHotelData(value:any): Observable<any>{
   console.log(value);
   const httpOptions = {
      headers: {'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      'x-rapidapi-key': 'bfbd245365mshaa64168e90c4c28p1cb5b6jsn44eee3bf7d42'},
      params: {	'locale': 'en_US',
      'query': value}
    };
    const place="USA"
    return this.httpclient.get("https://hotels4.p.rapidapi.com/locations/search", httpOptions);
  }
  getHotel(checkin:any,checkout:any,person:any,destId:any): Observable<any>{
    const httpHeaders={
      headers:{'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      'x-rapidapi-key': 'bfbd245365mshaa64168e90c4c28p1cb5b6jsn44eee3bf7d42'},
      params:{
        'currency': 'USD',
	      'locale': 'en_US',
	      'sortOrder': 'PRICE',
      	'destinationId': destId,
	      'pageNumber': '1',
	      'checkIn': checkin,
	      'checkOut': checkout,
	      'pageSize': '25',
	      'adults1': person
      }
    };
    return this.httpclient.get("https://hotels4.p.rapidapi.com/properties/list", httpHeaders);
  }
}


