import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';

const Myroute :Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"signin",
    component:LoginComponent

  },
  {
  path:"signup",
  component:SignupComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Myroute)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
