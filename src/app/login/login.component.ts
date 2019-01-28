import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../login.service';
import {parseHttpResponse} from 'selenium-webdriver/http';
import {ɵResourceLoaderImpl} from '@angular/platform-browser-dynamic';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router ) { }

  ngOnInit() {
  }
  login(formulaire: NgForm) {
      this.loginService.login(formulaire.value.email, formulaire.value.password ).subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('token', response['id']);
          const link = [''];
          this.route.navigate(link);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
