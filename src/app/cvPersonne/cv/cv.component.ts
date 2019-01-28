import { Component, OnInit } from '@angular/core';
import {Personne} from '../Personne';
import {CvService} from '../cv.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [] = [];
  personne: Personne;
  constructor(private cvService: CvService) { }

  ngOnInit() {
      this.cvService.loadPersonnes().subscribe(
        (personnes) => {
          this.personnes = personnes;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getPersonne(event) {
    console.log('getPersonne', event);
    this.personne = event.selectedItem;
    console.log('in cv personne apres click : ', this.personne);
  }
  saveCvs() {
    this.cvService.saveCvs().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }
}
