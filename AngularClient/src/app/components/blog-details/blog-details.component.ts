import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service'
import { ActivatedRoute,Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service'

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
    private authenticationService: AuthenticationService,
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

  deleteBlog() {
    const user = this.authenticationService.userValue;
        if (user) {
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
      else {
        this.router.navigate(['/login']);
        return false;
      }
    
  }

  
}
