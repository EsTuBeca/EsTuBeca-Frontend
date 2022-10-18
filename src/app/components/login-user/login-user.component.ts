import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
    myForm !: FormGroup;

  constructor(
    private fb:FormBuilder) {
    
  }

  ngOnInit(): void {
  }

}
