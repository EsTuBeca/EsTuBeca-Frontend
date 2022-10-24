import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { environment } from 'src/environments/environment.prod';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  user !: User;
  idUser:any;
  basePath:string=environment.basePath;
  constructor(  private userService:UserService,
    private snackBar: MatSnackBar,
    private router:Router,
    private route:ActivatedRoute,
    private http : HttpClient) { }

  ngOnInit(): void {
    const variable = this.route.snapshot.paramMap.get('id');
     console.log("foro 1"+variable)
     const variable2 = this.route.snapshot.paramMap.get('id2');
     console.log("foro 2 "+variable2)
  }
  
}
