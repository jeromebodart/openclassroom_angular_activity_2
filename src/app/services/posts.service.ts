import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  postsSubject = new Subject<Post[]>();
  private postlists = [
    {
    id: 1, 
	  title: 'Mon premier post',
	  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quo, exercitationem, officiis ducimus harum similique porro in eveniet vitae ipsum totam, fuga aliquam! Deserunt sapiente perspiciatis voluptatibus repellat ullam velit.',
	  loveIts: 0,
	  created_at: new Date(Date.now())
    },
    {
      id: 2,
      title: 'Mon deuxième post',
	  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti odio animi eius sapiente dolor ducimus. Eius rerum enim earum odio molestiae officia! Sapiente eligendi atque dolorum et ipsa perspiciatis, tempora.',
	  loveIts: 0,
	  created_at: new Date(Date.now())
    },
    {
      id: 3,
      title: 'Encore un post',
	  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolorum veniam beatae sunt est nobis nam, at ratione alias, sequi modi rem esse aliquam id quibusdam quod perspiciatis consequuntur labore.',
	  loveIts: 0,
	  created_at: new Date(Date.now())
    }
  ];
  private Counter = 4;
  public getPosts() {
    return this.postlists;
  }

  public getById(id: string) {
    return this.postlists.find((p: Post) => p.id === parseInt(id, 10));
  }

  createNewPost(newPost: Post) {
    newPost.id = this.Counter;
    this.postlists.push(newPost);
    this.Counter++;
    this.emitPostSubject();
  }

  removePost(id: number){
    this.postlists.splice(this.postlists.indexOf(this.getById(id.toString())), 1);
    this.emitPostSubject();
  }

  emitPostSubject(){
    this.postsSubject.next(this.postlists.slice());
  }
  constructor() { }
}
