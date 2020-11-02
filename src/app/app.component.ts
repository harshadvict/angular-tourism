import { Component } from '@angular/core';
import { from } from 'rxjs';
import {FlightDataService} from '../app/flight-data.service';
import {flightPlace} from '../app/flightResponse/flightPlaceResponse';
import {HotelDataServiceService} from './hotel-data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listPlace: flightPlace[];
  constructor(private hotelService:HotelDataServiceService){
  }
  ngOnInit(){
    // this.hotelService.getHotelData()
    // .subscribe(
    //   data=>{
    //     this.listPlace=data;
    //     //console.log("ok");
    //     console.log(data);
    //    console.log(this.listPlace);
    //   }
    // );
  }
}
