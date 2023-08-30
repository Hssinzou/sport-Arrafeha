import { Input , Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() m : any ;
  

  constructor() { }

  ngOnInit() {}
  ScoreColor(sc1 : number, sc2 : number){
    if (sc1>sc2) { return "green"}
     else if (sc1<sc2) {return "red"}
     else  {return "blue"}

  }

}
