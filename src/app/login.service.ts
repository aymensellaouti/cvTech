import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Personne} from './cvPersonne/Personne';

@Injectable()
export class LoginService {
  credenitals: any;
  private apiUrl = 'http://localhost:3000/api/Users/login';
  constructor(private http: HttpClient) { }
  login(credentials) {
      console.log(credentials);
      return this.http.post(this.apiUrl, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return localStorage.getItem('token');
  }
}
