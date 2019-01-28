import { Component, OnInit } from '@angular/core';
import {CvService} from '../cvPersonne/cv.service';
import {Personne} from '../cvPersonne/Personne';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  liveSearch: Personne [];
  isLogged = false;
  constructor(private cvService: CvService) { }
  ngOnInit() {
    this.liveSearch = [];
    this.isLogged = !!localStorage.getItem('token');
    console.log(this.isLogged);
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
}
