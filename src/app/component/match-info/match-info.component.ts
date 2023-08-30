import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { T } from 'src/app/data/matches';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id: any;
  matches: any ;
  findedMatch: any;
  y : any ="Match info"
  constructor(private activatedRout: ActivatedRoute,
    private matchService:MatchService) {
  }

  ngOnInit() {
    this.id = this.activatedRout.snapshot.paramMap.get("id");
   

// console.log("here finded", this.findedMatch);
this.matchService.getMatcheById(this.id).subscribe( 
  (data)=>{
console.log("here data object from be" , data);
this.findedMatch = data.match;
  }
)

  }

}

