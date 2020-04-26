import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blog = {
    title: '',
    content: ''
  };
  submitted = false;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  saveBlog(){
    const data = {
      title: this.blog.title,
      content: this.blog.content
    };
    
    this.blogService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error)
      });
  }
  newBlog(){
    this.submitted = false;
    this.blog = {
      title: '',
      content: ''
    };
  }
}
