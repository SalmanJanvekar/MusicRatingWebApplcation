import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:1234';

  constructor(private http: HttpClient) { }

  addUser(register){
    this.http.post(this.uri+'/Music/register', register)
      .subscribe(res => console.log);
  }
}
