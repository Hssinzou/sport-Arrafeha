import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teams, TeamsT } from 'src/app/data/theTeams';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  y : any ="Edit Team"
  id : any ;
  teamsTab : any = TeamsT
findedTeam : any ;

  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
this.id = this.activatedRouter.snapshot.paramMap.get("id");
for (let i = 0; i < this.teamsTab.length; i++) {
  if (this.id == this.teamsTab[i].id) {
    this.findedTeam= this.teamsTab[i];
    break ;
  }
  
}
  }

}
