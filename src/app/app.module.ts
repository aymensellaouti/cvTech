import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ColorComponent } from './color/color.component';
import { TwowayComponent } from './twoway/twoway.component';
import { CompFilsComponent } from './comp-fils/comp-fils.component';
import { WordComponent } from './word/word.component';
import { LampeComponent } from './lampe/lampe.component';
import { HighlightDirective } from './highlight.directive';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
import { TodoComponent } from './todo/todo.component';
import {TodoService} from './todo.service';
import {CvService} from './cvPersonne/cv.service';
import {CvModule} from './cvPersonne/cv.module';
import { HeaderComponent } from './header/header.component';
import {ROUTING} from './app.routing';
import {CvRouting} from './cvPersonne/cv.routing';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import {Comp2Component} from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ColorComponent,
    TwowayComponent,
    CompFilsComponent,
    Comp2Component,
    WordComponent,
    LampeComponent,
    HighlightDirective,
    TestDirectiveComponent,
    TodoComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CvModule,
    HttpClientModule,
    CvRouting,
    ROUTING
  ],
  providers: [
    TodoService,
    CvService,
    LoginService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
