import { Component, OnInit } from '@angular/core';
import { HotelDataServiceService } from '../hotel-data-service.service';
import { hotelData } from '../hotelResponse/hotelresponse';

@Component({
  selector: 'app-serched-hotel',
  templateUrl: './serched-hotel.component.html',
  styleUrls: ['./serched-hotel.component.css']
})
export class SerchedHotelComponent implements OnInit {

  hotels : any=[];
  hotelData:hotelData[];
  constructor() { }

  ngOnInit(): void {
  }
  getDatafromServices(data:any){
    this.hotels=data;
    console.log(this.hotels);
  }
}
