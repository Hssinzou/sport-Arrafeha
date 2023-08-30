import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { pleyrs } from 'src/app/data/players';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  y: any = "Edit player"
  ///////////////
  player: any = {};
  editForm: FormGroup
  id: number;
  playersTab: any = pleyrs

  constructor() { }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem("playerId"));
    for (let i = 0; i < this.playersTab.length; i++) {
      if (this.id == this.playersTab[i].id) {
        this.player = this.playersTab[i]
        break;

      }

    }
  }
  editPlayer() { }

}
