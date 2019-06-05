import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
// import { Post } from './models/post.model';
// import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';
//  posts: Post[];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor() {
  }
}
    //this.posts = this.postsService.postlists;

