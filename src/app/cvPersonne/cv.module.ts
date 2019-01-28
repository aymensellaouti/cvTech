import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {CvService} from './cv.service';
import {CvCardComponent} from './cv-card/cv-card.component';
import { FormPersonneComponent } from './form-personne/form-personne.component';
import { LogoutComponent } from '../logout/logout.component';

@NgModule({
  declarations: [
    CvCardComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    FormPersonneComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    CvComponent,
  ],
  providers: [
    CvService
  ],
})
export class CvModule { }
