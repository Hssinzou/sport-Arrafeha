import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import jwt_decoded from "jwt-decode"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user : any ;
  constructor(private router:Router) { }

  ngOnInit() {}
  isLoggedIn(){
    const jwt = sessionStorage.getItem('token');
    if (jwt){
      this.user = this.decodeToken(jwt);
    }
    return !!jwt
    }
    decodeToken(token: string) {
      return jwt_decoded(token);
    }
logout(){
  sessionStorage.removeItem('token');
  this.router.navigate(["signin"])
}
}
