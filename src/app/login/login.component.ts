import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../login.service';
import {parseHttpResponse} from 'selenium-webdriver/http';
import {ɵResourceLoaderImpl} from '@angular/platform-browser-dynamic';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Personne} from '../cvPersonne/Personne';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  constructor(private loginService: LoginService, private route: Router ) { }

  ngOnInit() {
  }
  login(formulaire: NgForm) {
      const credentials = <Personne> formulaire.value.user;
    this.loginService.login(credentials).subscribe(
        (response) => {
          localStorage.setItem('token', response['id']);
          const link = [''];
          this.errorMessage = '';
          this.route.navigate(link);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.errorMessage = 'Login ou mot de passe invalides';
          } else {
            this.errorMessage = 'Erreur de connexion, veuillez contacter l\'administrateur';
          }
        }
      );
  }
  showInput(input) {
    console.log(input);
  }

}
