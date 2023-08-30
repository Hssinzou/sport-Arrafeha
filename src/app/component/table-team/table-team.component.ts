import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsT } from 'src/app/data/theTeams';

@Component({
  selector: 'app-table-team',
  templateUrl: './table-team.component.html',
  styleUrls: ['./table-team.component.css']
})
export class TableTeamComponent implements OnInit {
  TeamsTab : any = TeamsT
  

  constructor(private myrouter:Router) { }

  ngOnInit() {
  }
  displayTeam(id: number) {
    
    this.myrouter.navigate(["team-info"])
  }
  editTeam(id: number) {
   
    this.myrouter.navigate([`edit-team/${id}`])
  }
  deleteTeam(id: number) {
    alert(`team ${id} is deleted`)
  }

}
