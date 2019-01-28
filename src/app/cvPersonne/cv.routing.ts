import {RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {FormPersonneComponent} from './form-personne/form-personne.component';
import {LoginComponent} from '../login/login.component';

const CV_ROUTE: Routes = [
  {path: '', component: CvComponent },
  {path: 'addPersonne', component: FormPersonneComponent },
];

export const CvRouting = RouterModule.forChild(CV_ROUTE);
