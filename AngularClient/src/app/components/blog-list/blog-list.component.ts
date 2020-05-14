import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: any;
  currentIndex = -1;
  constructor(private blogService: BlogService) {}

  ngOnInit(){
    this.getAllBlogs();
   
  }
  getAllBlogs(){
    return this.blogService.getAll()
    .subscribe(
      blogs => 
        this.blogs = blogs,
      error => {
        console.log(error);
      }
    );
  }

}
