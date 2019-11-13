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
    this.buildPost("JavaScript Is Cool", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates consectetur suscipit repellat enim aut excepturi obcaecati minus dicta mollitia corrupti omnis, soluta at necessitatibus cupiditate sequi aspernatur deleniti quisquam optio."),
    this.buildPost("Angular Makes Things Easier", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eveniet quis tenetur quas porro reprehenderit a iure iste pariatur laudantium aspernatur, illum sed dolores atque aliquid similique consequatur? Iste, laboriosam."),
    this.buildPost("TDD Needs More Use", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, voluptate vitae. Sapiente corporis praesentium dicta, fugit incidunt doloribus provident ea nulla magni quas eaque velit consectetur possimus, officia iusto libero.")
  ];

  buildPost(newTitle: string, newThought: string = "", newLikes: number = 0, newDislikes: number = 0): Post {
    return { title: newTitle, thought: newThought, likes: newLikes, dislikes: newDislikes };
  }

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
