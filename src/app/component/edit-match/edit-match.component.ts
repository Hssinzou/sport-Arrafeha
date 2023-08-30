import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { T } from 'src/app/data/matches';
import { MatchService } from 'src/app/service/match.service';


@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  y: any = "Edit match"
  editForm: FormGroup
  id: number;

  matchesTab: any ;

  match: any = {};
  constructor(private matchService:MatchService , 
    private router:Router) { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("matchId"));
    this.matchService.getMatcheById(this.id).subscribe((data)=>{
      this.match = data.match;
    })
   
  }
  validate() {
    this.matchService.updateMatch(this.match).subscribe((result)=>{
      console.log("here result after update" , result.msg);
      this.router.navigate(["dashboard"]);
    })
   }
}
