import { UserService } from './../../services/user.service';
import { ComentarioService } from '../../services/comentario.service';
import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {
  @Input() comentario!:Comentario;
  @Input() userId:any;
  idPost:any;
  canModify: boolean = false;
  nombre: any;
  snackBar: any;
  comentD!: Comentario[];

  constructor(private comentarioService: ComentarioService,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    
    this.profileService.getProfileId(this.userId).subscribe(
      (data) => {
        this.canModify = (this.comentario.autor.id === data.id);
      }
    );

    this.comentarioService.getAll().subscribe((data) => { this.comentD = data;});
    this.nombre = this.comentario.autor.name + " " + this.comentario.autor.lastName;
  }
  deleteComentario(id:number) {

    this.comentarioService.delete(id).subscribe(() => {
      this.comentD = this.comentD.filter((e:Comentario) => {
        return e.id !== id ? e : false;
      });
      this.snackBar.open('Se elimino el comentario!', '', {
        duration: 6000,
      });
    });
    this.ngOnInit();
    window.location.reload();
  }

}
