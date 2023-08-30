import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-seach-player',
  templateUrl: './seach-player.component.html',
  styleUrls: ['./seach-player.component.css']
})
export class SeachPlayerComponent implements OnInit {
  finderForm:FormGroup
  players : any ;
  constructor(private formBuilder:FormBuilder , 
    private sPlayer:PlayerService) { }

  ngOnInit() {
    this.finderForm = this.formBuilder.group({
      Name:["" , [Validators.required , Validators.minLength(3)]],
      age : ["" , [Validators.required]],
    })
  }
  searchPLayer(){
    this.sPlayer
    .getPlayerByNameOrAge(this.finderForm.value)
    .subscribe((result)=>{
      console.log("here result from BE" , result.players);
      this.players = result.players;
    })
    
  }

}
