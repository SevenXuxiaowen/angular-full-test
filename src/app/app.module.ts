import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MLModule } from './ml.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { StudyComponent } from './study/study.component';
import { CurrentStudyComponent } from './study/current-study/current-study.component';
import { NewStudyComponent } from './study/new-study/new-study.component';
import { PastStudyComponent } from './study/past-study/past-study.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StudyComponent,
    CurrentStudyComponent,
    NewStudyComponent,
    PastStudyComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
