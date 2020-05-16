import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  currentBlog = null;
  data:any;
  blogId = this.route.snapshot.paramMap.get('id');
  message = '';
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
    ) { ;
     }

  ngOnInit(){
    this.message = '';
    this.getBlog(this.route.snapshot.paramMap.get('id'));
    
  }
  getBlog(id){
    this.blogService.get(id)
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

  update(){
    this.blogService.update(this.blogId, this.currentBlog)
    .subscribe(
      response => {
        console.log(response)
        this.message = 'The blog was updated successfully'
      },
      error => {
        console.log(error);
      })
  }

  deleteBlog() {
    this.blogService.delete(this.blogId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/blog']);
        },
        error => {
          console.log(error);
        });
  }

  
}
