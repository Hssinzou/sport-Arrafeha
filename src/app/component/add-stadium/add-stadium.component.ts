import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadium: any ={}; 
  stadiumForm:FormGroup

  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit() {
    this.stadiumForm = this.FormBuilder.group({
      stadiumName:["" , [Validators.required]] ,
      stadiumCapacity:["" , [Validators.required ]],
    })
  }
  addStadium( ){
localStorage.setItem('stadium' ,JSON.stringify(this.stadium));
  }

}
