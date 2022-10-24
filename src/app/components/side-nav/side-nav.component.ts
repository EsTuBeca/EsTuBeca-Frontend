import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService } from './../../services/user.service';
import { environment } from './../../../environments/environment';
import { User } from './../../models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReadVarExpr, visitAll } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {
  myForm!: FormGroup;
  user!: User;
  idUser: any;
  public imgfiles: any = [];
  public previewImg!: string;
  public nombre!: string;

  constructor(
    public route:ActivatedRoute, 
    private userService: UserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    const variable = this.route.snapshot.paramMap.get('id');
    console.log("sidenav "+ variable)
    this.idUser = variable;
    this.userService.getUserId(this.idUser)
    .subscribe((data) => {
      this.user = data;
      this.nombre = this.user.name;
      const app = document.getElementById("usuario");
      const p = document.createElement("p");
      p.textContent = this.nombre;
      app?.appendChild(p);
    })   
    
  }
}
