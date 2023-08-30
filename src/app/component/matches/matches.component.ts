import { Component, OnInit } from '@angular/core';
import { T } from 'src/app/data/matches';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  t: any = T ;
  y : any = "matches" ;

  constructor() { }

  ngOnInit() {
  }

}
