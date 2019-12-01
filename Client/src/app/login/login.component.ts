import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {login} from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    
  }
addUser(e){
  const register = {
    Email: e.elements[0].value,
    Password: e.elements[1].value,
  };
  this.loginService
    .addUser(register);
}

}
