import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HotelDataServiceService} from '../hotel-data-service.service';
import {hotelData} from '../hotelResponse/hotelresponse';
import {SerchedHotelComponent} from '../serched-hotel/serched-hotel.component'; 

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  destinationId:any;
  hotelData:any=[];
  test:any=[];
  hotel:any=[];
  individualHotel:Object;
  hotelsearch= new SerchedHotelComponent();
  constructor(private hotelService:HotelDataServiceService) { }
  visiblePro:boolean=false;
  hotelFormVisible:boolean=true;
  displayLoc:boolean=true;
  ngOnInit(){
  
  }
  removeSearch(form:NgForm){
    var val:any;
    val=form.value.tourPlace;
    console.log(val);
    this.visiblePro=true;
    this.getHotelFromService(val);
    this.displayLoc=false;
  }

  getHotelFromService(value:any){
    console.log(value);
    this.hotelService.getHotelData(value)
    .subscribe(
      data=>{
        this.test=data;
        console.log(this.test);
          this.hotelData=data.suggestions;
          console.log(this.hotelData);
          console.log(data);
          this.hotelsearch.getDatafromServices(this.hotelData);
      }
    )
  }
  getHotel(checkin:any,checkout:any,person:any){
    this.hotelService.getHotel(checkin,checkout,person,this.destinationId)
    .subscribe(
      data1=>{
        this.hotel=data1.data.body.searchResults.results;
        console.log("new data");
        console.log(this.hotel);
      }
    )
    console.log(checkin);
    console.log(checkout);
    console.log(person);
  }
  showId(data1:any){
    this.hotelFormVisible=false;
    this.displayLoc=true;
    this.destinationId=data1;
    console.log(this.destinationId);
    
  }
  hotelEnquiry(form : NgForm){
    this.hotelFormVisible=true;
    let checkin:any=form.value.checkin;
    let checkout:any=form.value.checkout;
    let noperson:any=form.value.person;
    console.log(checkin);
    console.log(checkout);
    console.log(noperson);
    this.getHotel(checkin,checkout,noperson);
  }
}
