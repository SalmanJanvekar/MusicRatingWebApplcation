import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {login} from './login.model';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  logInUser(){
  

    var Email = (<HTMLInputElement>document.getElementById("Email")).value;
    var Password = (<HTMLInputElement>document.getElementById("Password")).value;

    var uri = 'http://localhost:1234';

    //defines http & opens post request
    const http = new XMLHttpRequest();
    http.open("POST", uri+'/Music/logIn')
  
    let body = new URLSearchParams();

    //appends new email and password to body of the request
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)){
    body.append("Email", Email);
    body.append("Password", Password);

    //sends http response
    http.send(body);
    }else{
      return alert("Invalid Email")
    }
  }

} 
