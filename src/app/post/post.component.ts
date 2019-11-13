import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  @Input()
  index: number;

  @Output()
  deleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deletePost() {
    this.deleted.emit(this.index);
  }

}
