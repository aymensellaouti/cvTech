import { Component, OnInit } from '@angular/core';
import {CvService} from '../cvPersonne/cv.service';
import {Personne} from '../cvPersonne/Personne';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  liveSearch: Personne [];
  isLogged = false;
  constructor(private cvService: CvService, private loginService: LoginService) { }
  ngOnInit() {
    this.liveSearch = [];
    this.isLogged = !!localStorage.getItem('token');
  }
  serachPersonnes(name: string) {
    this.cvService.searchPersonnes(name).subscribe(
      (personnes) => {
        console.log('in search : ');
        console.log(personnes);
        this.liveSearch = personnes;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.loginService.logout();
    this.isLogged = false;
  }
}
