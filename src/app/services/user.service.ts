import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }
  addUser(user: User) {
    return this.http.post<User>(
      'http://localhost:3000/users',
      user
    );  
  }
}
