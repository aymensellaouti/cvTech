import {RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cvPersonne/cv/cv.component';
import {LampeComponent} from './lampe/lampe.component';
import {ColorComponent} from './color/color.component';
import {LoginComponent} from './login/login.component';

const APP_ROUTE: Routes = [
  {path: 'lampe', component: ColorComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: CvComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTE);
