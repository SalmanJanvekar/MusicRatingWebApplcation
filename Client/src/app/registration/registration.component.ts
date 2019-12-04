import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  addUser(){
    var Email = (<HTMLInputElement>document.getElementById("Email")).value;
    var Password = (<HTMLInputElement>document.getElementById("Password")).value;

    var uri = 'http://localhost:1234';

    //defines http & opens post request
    const http = new XMLHttpRequest();
    http.open("POST", uri+'/Music/register')
  
    let body = new URLSearchParams();
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)){
    //appends new email and password to body of the request
    body.append("Email", Email);
    body.append("Password", Password);

    //sends http response
    http.send(body);
  }else{
    return alert("Invalid Email!")
  }
  


} 

}

