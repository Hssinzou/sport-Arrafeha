import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any ={};
  matchForm: FormGroup;
  y : any ="Add Match"

  constructor(private mService:MatchService,
    private router:Router) { }

  ngOnInit() {}
    addMatch(){
      
      console.log("this match" , this.match);
      this.mService.addMatch(this.match).subscribe((data)=>{
        console.log("here respond from be" , data.msg);
        this.router.navigate(["dashboard"]);
      });
  }

}
