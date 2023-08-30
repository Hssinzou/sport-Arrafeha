import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pleyrs } from 'src/app/data/players';

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrls: ['./table-player.component.css']
})
export class TablePlayerComponent implements OnInit {
  playersTab: any = pleyrs
   
  constructor(private playerrouter:Router) { }

  ngOnInit() {
  }
  displayPlayer(id: number) {
    this.playerrouter.navigate(["player-info"])
  }
  editPlayer(id: number) {
    localStorage.setItem("playerId" , JSON.stringify(id));
    this.playerrouter.navigate(["edit-player"])
  }
  deletePlayer(id: number) {
    alert(`Player ${id} is deleted`)
  }

}
