import {RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {FormPersonneComponent} from './form-personne/form-personne.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';
import {UpdateComponent} from './update/update.component';
import {AuthGuardService} from '../auth-guard.service';

const CV_ROUTE: Routes = [
  {
    path: 'cv',
    canActivate: [AuthGuardService],
    children: [
      {path: '', component: CvComponent },
      {path: 'detail/:id', component: DetailCvComponent },
      {path: 'update/:id', component: UpdateComponent },
      {path: 'addPersonne', component: FormPersonneComponent },
    ]
  }
];
export const CvRouting = RouterModule.forChild(CV_ROUTE);
