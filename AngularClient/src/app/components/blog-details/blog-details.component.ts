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
  message = '';
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(){
    this.get(this.route.snapshot.paramMap.get('id'));
   
  }
  get(id){
    return this.blogService.get(id)
    .subscribe(
      data => {
        this.currentBlog = data;
        this.data = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  update(){
    this.blogService.update(this.currentBlog.id, this.currentBlog)
    .subscribe(
      res => {
        console.log(res)
        this.message = 'The blog was updated successfully'
      },
      error => {
        console.log(error);
      })
  }

  delete(){
    this.blogService.delete(this.currentBlog.id)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/blog'])
      },
      error => {
        console.log(error);
      }
)
  }


}
