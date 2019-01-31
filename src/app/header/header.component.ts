import { Component, OnInit } from '@angular/core';
import {CvService} from '../cvPersonne/cv.service';
import {Personne} from '../cvPersonne/Personne';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  liveSearch: Personne [];
  isLogged = false;
  constructor(private cvService: CvService,
              private loginService: LoginService,
              private router: Router) { }
  ngOnInit() {
    this.liveSearch = [];
    this.isLogged = !!localStorage.getItem('token');
  }
  serachPersonnes(name: string) {
    this.cvService.searchPersonnes(name).subscribe(
      (personnes) => {
        this.liveSearch = personnes;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  goToDetails(id, searchInput) {
    console.log('here');
    this.liveSearch = [];
    searchInput.value = '';
    const link = ['cv/detail', id];
    this.router.navigate(link);
  }

  logout() {
    this.loginService.logout();
    this.isLogged = false;
  }
}
