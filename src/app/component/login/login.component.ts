import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //define user ogject 
  user: any = {};
  y: any = "login"
  //defind for ID
  loginForm: FormGroup;
  erroeMsg

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }
  login() {
    
    console.log("this object", this.user)
    this.userService.login(this.user).subscribe((data) => {
      console.log("here data after llogin ", data);
      if (data.result) {
        sessionStorage.setItem("token", data.result);
        let decodeToken:any = this.decodeToken(data.result);
        console.log("here decoded token ", decodeToken);
        (decodeToken.role == "user") ?
        this.router.navigate([""]) :
        this.router.navigate(["dashboard"]);
     
      } else {
        this.erroeMsg = "please chek ur informations"
      }
     
    });

  }
  decodeToken(token: string) {
    return jwt_decode(token);
  }


}
