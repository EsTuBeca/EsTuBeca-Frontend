import { PostService } from './../../services/post.service';
import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-meta-post',
  templateUrl: './meta-post.component.html',
  styleUrls: ['./meta-post.component.css']
})
export class MetaPostComponent implements OnInit {

  user!:User;
  author: any;

  @Input()
  post!: Post;
  
  constructor(private userService:UserService, private postService:PostService){}
  ngOnInit():void{

    this.postService.getPostId(1).subscribe((data) => {
      this.post.updatedAt;
    })

    this.userService.getUserId(1).subscribe((data) => {
      this.user = data;
      this.author = this.user.name + " "+ this.user.lastname;
    })
  }
}
