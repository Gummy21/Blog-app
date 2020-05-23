import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service'
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {

  currentBlog = null;
  id = this.route.snapshot.paramMap.get('id')
  data:any;
  message = '';
  updated = {
    title: "",
    content: ""
  }
  
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(){
    this.message = '';
      this.blogService.get(this.id)
      .subscribe(
        data=> {
          this.currentBlog = data; 
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateBlog(){
    const data ={
      title: this.updated.title,
      content: this.updated.content
    }
    this.blogService.update(this.id,data)
    .subscribe(
      response => {
        this.router.navigate(['/blog']);
        console.log(response)
        this.message = 'The blog was updated successfully'
       
      },
      error => {
        console.log(error);
      });
  }

}
