import {RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cvPersonne/cv/cv.component';
import {LampeComponent} from './lampe/lampe.component';
import {ColorComponent} from './color/color.component';
import {LoginComponent} from './login/login.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuardService} from './auth-guard.service';

const APP_ROUTE: Routes = [
  {path: '', redirectTo: 'cv', pathMatch: 'full'},
  {
    path: 'lampe',
    component: ColorComponent,
    canActivate: [AuthGuardService]
  },
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', component: ErrorPageComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTE);
