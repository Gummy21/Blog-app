import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';

const routes: Routes = [
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'blog/results', component:BlogDetailsComponent},
  { path: 'add', component: AddBlogComponent },
  { path: 'register', component:UserAddComponent},
  { path: 'login', component:UserLoginComponent},
  { path: 'logout', component:UserLogoutComponent},
  { path: '', redirectTo: 'blog', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
