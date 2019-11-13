import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  // List of posts on the page
  posts: Post[] = [
    { title: "JavaScript Is Cool", thought: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates consectetur suscipit repellat enim aut excepturi obcaecati minus dicta mollitia corrupti omnis, soluta at necessitatibus cupiditate sequi aspernatur deleniti quisquam optio." },
    { title: "Angular Makes Things Easier", thought: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eveniet quis tenetur quas porro reprehenderit a iure iste pariatur laudantium aspernatur, illum sed dolores atque aliquid similique consequatur? Iste, laboriosam." },
    { title: "TDD Needs More Use", thought: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, voluptate vitae. Sapiente corporis praesentium dicta, fugit incidunt doloribus provident ea nulla magni quas eaque velit consectetur possimus, officia iusto libero." }
  ];

  hideForm: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addThought(): void {
    this.hideForm = false;
  }

  onSubmit(gotNewPost): void {
    this.posts.push(gotNewPost);
    this.hideForm = true;

  }

  onDelete(indexToDelete): void {
    this.posts.splice(indexToDelete, 1);
  }
}
