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
import { BecasComponent } from './components/becas/becas.component';
import { BecasDetalleComponent } from './components/becas-detalle/becas-detalle.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ForoComponent } from './components/foro/foro.component';
import { HaztePremiumComponent } from './components/hazte-premium/hazte-premium.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AvisosComponent } from './components/avisos/avisos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginUserComponent,
    RegisterUserComponent,
    BecasComponent,
    BecasDetalleComponent,
    CursosComponent,
    EditUserComponent,
    ForoComponent,
    HaztePremiumComponent,
    HomePageComponent,
    InicioComponent,
    SideNavComponent,
    AvisosComponent,
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
