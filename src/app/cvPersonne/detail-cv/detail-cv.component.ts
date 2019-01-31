import {Component, OnDestroy, OnInit} from '@angular/core';
import {Personne} from '../Personne';
import {CvService} from '../cv.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit, OnDestroy {

  constructor(private cvSerice: CvService, private activatedRoute: ActivatedRoute) { }
    id = 0;
    subscription: any;
    personne: Personne;
  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        console.log('in ngOnInit', params['id']);
        this.id = params['id'];
        if (this.id) {
          this.cvSerice.getPersonne(this.id).subscribe(
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
  ngOnDestroy(): void {
    console.log('in onDestroy', this.subscription);
    this.subscription.unsubscribe();
  }
}
