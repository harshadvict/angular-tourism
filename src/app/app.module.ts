import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FlightComponent } from './flight/flight.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FlightDataService} from '../app/flight-data.service';
import {HotelDataServiceService} from '../app/hotel-data-service.service';
import { from } from 'rxjs';
import { HotelComponent } from './hotel/hotel.component';
import { SerchedHotelComponent } from './serched-hotel/serched-hotel.component';
import {FormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
const appRoutes:Routes=[
  {path:'flight', component:FlightComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlightComponent,
    HotelComponent,
    SerchedHotelComponent,
    SignUpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [FlightDataService,HotelDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
