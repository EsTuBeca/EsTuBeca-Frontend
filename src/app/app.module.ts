import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { AvisosComponent } from './components/avisos/avisos.component';
import { BecasComponent } from './components/becas/becas.component';
import { BecasDetalleComponent } from './components/becas-detalle/becas-detalle.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ForoComponent } from './components/foro/foro.component';
import { HaztePremiumComponent } from './components/hazte-premium/hazte-premium.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PreviewPostComponent } from './components/preview-post/preview-post.component';
import { MetaPostComponent } from './components/meta-post/meta-post.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { AddBecaComponent } from './components/add-beca/add-beca.component';
import { EditBecaComponent } from './components/edit-beca/edit-beca.component';
import { RegisterProfileComponent } from './components/register-profile/register-profile.component';
import { PostDetalleComponent } from './components/post-detalle/post-detalle.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { EditCursoComponent } from './components/edit-curso/edit-curso.component';
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AddTemaComponent } from './components/add-tema/add-tema.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginUserComponent,
    RegisterUserComponent,
    AvisosComponent,
    BecasComponent,
    BecasDetalleComponent,
    CursosComponent,
    ForoComponent,
    HaztePremiumComponent,
    HomePageComponent,
    InicioComponent,
    SideNavComponent,
    EditUserComponent,
    NewPostComponent,
    ListPostsComponent,
    PreviewPostComponent,
    MetaPostComponent,
    FavoriteButtonComponent,
    AddBecaComponent,
    EditBecaComponent,
    RegisterProfileComponent,
    PostDetalleComponent,
    ListCommentsComponent,
    AddCursoComponent,
    EditCursoComponent,
    CursoDetalleComponent,
    EditPostComponent,
    AddTemaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
