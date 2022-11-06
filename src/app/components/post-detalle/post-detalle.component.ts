import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detalle',
  templateUrl: './post-detalle.component.html',
  styleUrls: ['./post-detalle.component.css']
})
export class PostDetalleComponent implements OnInit {
  post!:Post;
  userId:any;
  idPost:any;
  
  currentUser!: User;
  canModify!: boolean;
  comments!: Comment[];
  commentControl = new UntypedFormControl();
  isSubmitting = false;
  isDeleting = false;
  lista: string[] | undefined;

  constructor(private postService: PostService, private router: Router,
    private route: ActivatedRoute, private commentService: CommentService,
    private userService:UserService) { 

    }

  ngOnInit(): void {

    this.userId = this.route.snapshot.paramMap.get('user');
    this.idPost= this.route.snapshot.paramMap.get('post');

    console.log("detalle-post USER: "+ this.userId);
    console.log("detalle-post POST: "+ this.idPost);

    this.postService.getPostId(this.idPost).subscribe((data)=>{
      this.post =data;
      this.post.title =data.title;
      this.post.author = data.author;
    });

    this.userService.getUserId(this.userId).subscribe((userData:User)=>
    {this.currentUser = userData;}
    )
    this.lista = this.post.tagList.split(",");
  }
  onToggleFavorite(favorited: boolean) {
    this.post.favorite = favorited;

    if (favorited) {
      this.post.favoritesCount++;
    } else {
      this.post.favoritesCount--;
    }
  }
  addComment() {
   
  }
  deleteArticle() {
   
  }
}
