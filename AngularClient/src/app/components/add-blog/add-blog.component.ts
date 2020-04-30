import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Location } from '@angular/common';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent { 
  blog = new Blog();
  submitted = false;
  constructor(private blogService: BlogService, 
  private location: Location)  {}

  newBlog(): void {
    this.submitted = false;
    this.blog = new Blog();
  }

  addBlog(){
    this.submitted = true;
    this.save();
  }
  goBack(): void{
    this.location.back();
  }
  private save(): void{
    this.blogService.create(this.blog).subscribe();
  }
}
