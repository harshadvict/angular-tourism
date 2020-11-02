import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import {User} from '../user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

  passData(){
    this.notify.emit(this.Fname);
  }

  user : User[]=[];
  header = new HeaderComponent();
  constructor() { }

  Fname: any;
  Lname: any;
  Pass: any;
  ans: any;
  conPass: any;
  email: any;
  female: any;
  male: any;
  phone: any;
  security: any;
  ngOnInit(): void {
  }
  
  SignUp(Form: NgForm) {
    console.log(Form.value);
    
    this.Fname = Form.value.Fname;
    // this.user.Fname=this.Fname;
    console.log(this.Fname);
    let userS = new User(this.Fname);
    this.user.push(userS);
    // this.Lname = Form.value.Lname;
    // this.Pass = Form.value.Pass;
    // this.email = Form.value.email;
    // this.female = Form.value.female;
    // this.male = Form.value.male;
    // this.phone = Form.value.phone;
    // this.security = Form.value.security;
    // this.ans = Form.value.ans;
    this.header.SignUpSubmitt(this.user,Form,this.Fname, this.Lname, this.Pass, this.email, this.female, this.male, this.phone, this.security, this.ans);
  }

}
