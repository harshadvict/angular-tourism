import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { SerchedHotelComponent } from './serched-hotel/serched-hotel.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'hotel', component:HotelComponent,children:[{path:'searchHotel', component:SerchedHotelComponent}]},
  {path:'signUp',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
