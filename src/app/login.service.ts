import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable()
export class LoginService {
  credenitals: any;
  private apiUrl = 'http://localhost:3000/api/Users/login';
  constructor(private http: HttpClient) { }
  login(email, pwd) {
      this.credenitals = {
        email: email,
        password: pwd
      };
      console.log(this.credenitals);
      return this.http.post(this.apiUrl, this.credenitals);
  }
}
