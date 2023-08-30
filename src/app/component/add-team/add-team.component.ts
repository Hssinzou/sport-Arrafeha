import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team : any={};
  teamForm : FormGroup ;
  y : any ="Add Team"

  constructor() { }

  ngOnInit() {
  }
  AddTeam(){
    console.log("this team" , this.team)
  }

}
