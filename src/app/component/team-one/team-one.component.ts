import {Input , Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-one',
  templateUrl: './team-one.component.html',
  styleUrls: ['./team-one.component.css']
})
export class TeamOneComponent implements OnInit {
  @Input() m : any ; 
  

  constructor() { }

  ngOnInit() {
  }

}
