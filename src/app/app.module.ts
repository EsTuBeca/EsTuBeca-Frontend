import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LoginUserComponent } from './components/login-user/login-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginUserComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
