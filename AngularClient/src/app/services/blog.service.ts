import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Blog  } from '../models/blog'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {  
  private baseUrl = 'http://localhost:8887/api/blog';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Blog[]> {
    console.log(this.http.get<Blog[]>(this.baseUrl))
    return this.http.get<Blog[]>(this.baseUrl)
   
  }
  get(id:number): Observable<Blog>{
    return this.http.get<Blog>(`${this.baseUrl}/${id}`)
  }

  create(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.baseUrl, blog, httpOptions);
  }

  update(blog: Blog): Observable<any> {
    return this.http.put(this.baseUrl, blog, httpOptions);
  }

  delete(blog: Blog | number): Observable<Blog> {
      const id = typeof blog === 'number' ? blog: blog.id;
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Blog>(url, httpOptions);
    }

  find(title: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.baseUrl}?title=${title}`);
  }

}
