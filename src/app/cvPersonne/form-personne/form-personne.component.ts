import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Personne} from '../Personne';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-personne',
  templateUrl: './form-personne.component.html',
  styleUrls: ['./form-personne.component.css']
})
export class FormPersonneComponent implements OnInit {

  personne: Personne;
  constructor(private cvService: CvService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(formulaire: NgForm) {
    console.log(formulaire);
    this.personne = <Personne>formulaire.value;
    this.cvService.addPersonne(this.personne).subscribe(
      (response) => {
        console.log(response);
        const link = [''];
        this.router.navigate(link);
      },
      (error) => {
        console.log('error');
      }
    );
  }

}
