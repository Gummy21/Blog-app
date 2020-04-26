import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:8887/"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(data){
    return this.http.post(baseUrl, data);
  }

  login(username){
    return this.http.post(baseUrl,username);
  }

  logout(){
    return this.http.get(baseUrl)
  }

}
