import { AddTemaComponent } from './components/add-tema/add-tema.component';
import { PostDetalleComponent } from './components/post-detalle/post-detalle.component';
import { AddBecaComponent } from './components/add-beca/add-beca.component';
import { EditBecaComponent } from './components/edit-beca/edit-beca.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';
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
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BecasDetalleComponent } from './components/becas-detalle/becas-detalle.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { RegisterProfileComponent } from './components/register-profile/register-profile.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { EditCursoComponent } from './components/edit-curso/edit-curso.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
  {path:'register-user', component: RegisterUserComponent},
  {path:'edit-user/:id', component: EditUserComponent},
  {path:'register-profile', component: RegisterProfileComponent},
  {path:'', component: LoginUserComponent},
 // {path:'/:id', component: LoginUserComponent}, 
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'homePage/:id',component: HomePageComponent,
  children : [
  {path:'premium/:id',component: HaztePremiumComponent},
  {path:'becas/:id3',component: BecasComponent},
  {path:'cursos/:id4',component: CursosComponent},
  {path:'cursos/:user/detalle/:curso',component:CursoDetalleComponent},
  {path:'cursos/:user/detalle/:curso/addTema/:curso',component:AddTemaComponent},
  {path:'foro/:id2',component: ForoComponent},
  {path:'new-post',component: NewPostComponent},
  {path:'foro/:user/post/:post', component: PostDetalleComponent},
  {path:'list-posts',component: ListPostsComponent},
  {path:'avisos',component: AvisosComponent},
  {path:'inicio',component: InicioComponent},
  {path:'becas/:user/detalle/:beca',component:BecasDetalleComponent},
  {path:'edit/:id3/:beca',component:EditBecaComponent},
  {path:'add/:id3',component:AddBecaComponent},
  {path:'addcurso/:id4',component:AddCursoComponent},
  {path:'editcurso/:id4/:curso',component:EditCursoComponent},
  {path:'edit/:user/post/:id5',component:EditPostComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
