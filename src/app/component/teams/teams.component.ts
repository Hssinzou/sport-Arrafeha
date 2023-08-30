import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/data/theTeams';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teamsTab: any = Teams ;
y : any ="Teams"
  constructor() { }

  ngOnInit() {
  }

}
