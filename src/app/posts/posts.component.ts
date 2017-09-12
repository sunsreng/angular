import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(res => {
        this.posts = res.json();
      });
  }

  ngOnInit() {
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(res => {
      console.log(res.json());
    });
  }
}
