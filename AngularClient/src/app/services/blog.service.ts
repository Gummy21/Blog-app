import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const baseUrl = 'http://localhost:8887/api/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {  
  constructor(private http: HttpClient) { }

  getAll() {
   
    return this.http.get(baseUrl);
   
  }
  get(id:number) {
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data){
    return this.http.put(baseUrl, data);
  }

  delete(id) {
      return this.http.delete(`${baseUrl}/${id}`);
    }

  find(title: string) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

}
