import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stadiumT } from 'src/app/data/stadium';

@Component({
  selector: 'app-table-stadium',
  templateUrl: './table-stadium.component.html',
  styleUrls: ['./table-stadium.component.css']
})
export class TableStadiumComponent implements OnInit {
  stadium : any = stadiumT

  constructor(private myRouter:Router) { }

  ngOnInit() {
  }
  displayMatch(id : number){
    this.myRouter.navigate([`stadium-info/${id}`])
    localStorage.setItem("table" , JSON.stringify(this.stadium));
  }
  deleteMatch(id: number){
    
  }

}
