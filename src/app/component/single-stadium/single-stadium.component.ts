import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stadiumT } from 'src/app/data/stadium';

@Component({
  selector: 'app-single-stadium',
  templateUrl: './single-stadium.component.html',
  styleUrls: ['./single-stadium.component.css']
})
export class SingleStadiumComponent implements OnInit {

 stadiumTab :any = JSON.parse(localStorage.getItem("table") || "[]")
id : any ;
findedStadium : any ; 
  constructor(private activatedRout:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRout.snapshot.paramMap.get("id");
    for (let i = 0; i < this.stadiumTab.length; i++) {
      if (this.stadiumTab[i].id == this.id) {
        this.findedStadium = this.stadiumTab[i];
        break;
      }
    }
  }

}
