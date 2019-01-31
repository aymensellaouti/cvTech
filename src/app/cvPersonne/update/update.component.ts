import { Component, OnInit } from '@angular/core';
import {Personne} from '../Personne';
import {ActivatedRoute} from '@angular/router';
import {CvService} from '../cv.service';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  personne: Personne;
  constructor(private activatedRoute: ActivatedRoute, private cvService: CvService) { }
  subscription: any;
  id: Number;
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        console.log('in ngOnInit Update', params['id']);
        this.id = params['id'];
        if (this.id) {
          this.cvService.getPersonne(this.id).subscribe(
            (personne) => {
              console.log(`search for ${this.id}`);
              this.personne = personne;
            },
            (error) => {
              this.personne = null;
            }
          );
        } else {
          this.personne = null;
        }
      },
      (error) => {
        console.log('Parameters error');
      }
    );
  }
  onSubmit(formulaire: NgForm) {
    console.log(formulaire);
  }

}
