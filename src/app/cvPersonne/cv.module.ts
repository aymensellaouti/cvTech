import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {CvService} from './cv.service';
import {CvCardComponent} from './cv-card/cv-card.component';
import { FormPersonneComponent } from './form-personne/form-personne.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';
import {CvRouting} from './cv.routing';

@NgModule({
  declarations: [
    CvCardComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    FormPersonneComponent,
    DetailCvComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CvRouting
  ],
  exports: [
    CvComponent,
  ],
  providers: [
    CvService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CvModule { }
