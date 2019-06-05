import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private postService: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      0,
      formValue['title'],
      formValue['content'],
      0,
      new Date(Date.now()),
    );
    console.log(newPost);
    this.postService.addNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}