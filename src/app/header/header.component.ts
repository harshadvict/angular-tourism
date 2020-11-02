import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Fname: string;  

  public city;
  user1:User;
  data:any=[];
  userTest : User[]=[];
  user:boolean=true;
  Firstname: any;
  Lname: any;
  Pass: any;
  ans: any;
  conPass: any;
  email: any;
  female: any;
  male: any;
  phone: any;
  security: any;
  constructor() { }
  ngOnInit(): void {
  }
  viewContent:boolean=false;
  makeHidden(){
    this.viewContent=true;
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  SignUpSubmitt(userNew : User[],Form:NgForm,Fname:any,Lname:any,Pass:any,email:any,female:any,male:any,phone:any,security:any,ans:any){
    // this.user1=user;
    // console.log("check model here");
    // console.log(user.Fname);
    this.userTest=userNew;
    console.log(this.userTest[0].Fname);
    this.data=Form.value;
    console.log(this.data);
    console.log("check here ");
    this.Firstname=Fname;
    console.log(this.Firstname);
    this.user=false;
    console.log(this.user);
    //  console.log("in-header");
  //  console.log(Fname);
  //   this.Fname=Fname;
  //   this.Lname=Lname;
  //   this.Pass=Pass;
  //   this.ans=ans;
  //   this.conPass=Pass;
  //   this.email=email;
  //   this.female=female;
  //   this.male=male;
  //   this.phone=phone;
  //   this.security=security;
  }
    parentMethod(data){
      this.Fname=data;
      console.log("checkingEmitter");
      console.log(this.Fname);
    }
}