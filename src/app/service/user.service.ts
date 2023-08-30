import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:3000/user"
  constructor(private http: HttpClient) { }
  signup(obj , img : File){
    let fData = new FormData();
    fData.append("img" , img);
    fData.append("firstName" , obj.firstName);
    fData.append("lastName" , obj.lastName);
    fData.append("email" , obj.email);
    fData.append("pwd" , obj.pwd);
    fData.append("tell" , obj.tell);
    fData.append("role" , obj.role);
   return this.http.post<{msg : string}>(this.userURL +"/signup"  , fData);
  }
  login(user){
    return this.http.post<{result : any , msg : string}>(this.userURL +"/login"  , user);
  }
}
