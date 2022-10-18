import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HaztePremiumComponent } from './components/hazte-premium/hazte-premium.component';
import { BecasComponent } from './components/becas/becas.component';
import { ForoComponent } from './components/foro/foro.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BecasDetalleComponent } from './components/becas-detalle/becas-detalle.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {path:'register-user', component: RegisterUserComponent},
  {path:'edit-user/:id', component: EditUserComponent},
  {path:'', component: LoginUserComponent},
 // {path:'/:id', component: LoginUserComponent}, 
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'homePage/:id',component: HomePageComponent,
  children : [ {path:'premium',component: HaztePremiumComponent},
  {path:'becas',component: BecasComponent},
  {path:'foro',component: ForoComponent},
  {path:'avisos',component: AvisosComponent},
  {path:'cursos',component: CursosComponent},
  {path:'inicio',component: InicioComponent},
  {path:'detalle',component:BecasDetalleComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
