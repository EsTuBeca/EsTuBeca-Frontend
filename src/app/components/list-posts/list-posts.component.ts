import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { PostListConfig } from'src/app/models/post-list-config';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  post!:Post;
  idPost:any;
  idUser:any; 

    constructor(private postService: PostService,private router: Router,
    private route: ActivatedRoute, private userService:UserService) { }

   ngOnInit(): void {
    const variable = this.route.snapshot.paramMap.get('id2');
    this.idUser= variable;
    //this.idUser = this.route.snapshot.paramMap.get('id');
    this.postService.getPostId(this.idUser)
    .subscribe((data) => {
      this.post = data;
    })
   }
   onToggleFavorite(favorited: boolean) {
    this.post['favorited'] = favorited;

    if (favorited) {
      this.post['favoritesCount']++;
    } else {
      this.post['favoritesCount']--;
    }
  }
}
