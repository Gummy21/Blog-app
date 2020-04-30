import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog'
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];
  
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    return this.blogService.getAll()
    .subscribe(
      blogs => {
        console.log(blogs)
        this.blogs = blogs
      }
    );
  }

}
