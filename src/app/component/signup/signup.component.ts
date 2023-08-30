import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  y: any = ""
  signupForm: FormGroup;
  path: string;
  user: any = {}
  errorMsg = "";
  imagePreview : any ;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      tell: ["", [Validators.required]],
      img: [""],
    });
    if (this.path == "/subscription") {
      this.y = "User SingUp"
    }
    else { this.y = "admin signup" }
  }
  signup() {
    this.path == "/subscription"
      ? (this.signupForm.value.role = "user") :
      (this.signupForm.value.role = "admin");

    this.userService.signup(this.signupForm.value , this.signupForm.value.img).subscribe((data) => {
      console.log("here respond from be", data.msg);
      if (data.msg == "0") {
        this.errorMsg = "email exist"
      } else {
        this.router.navigate(["signin"]);

      }
    });
  };
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }


}
