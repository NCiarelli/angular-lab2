import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output()
  submitted = new EventEmitter<Post>();

  newPost: Post = { title: "", thought: "" };

  constructor() { }

  ngOnInit() {
  }

  submitPost() {
    this.submitted.emit(this.newPost);
  }

}
