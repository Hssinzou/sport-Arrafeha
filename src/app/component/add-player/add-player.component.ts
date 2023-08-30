import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player : any = {};
  playerForm: FormGroup
  y : any ="Add player"

  constructor(private pServer:PlayerService , 
    private router: Router) { }

  ngOnInit() {}
  addPlayer(){
    this.router.navigate(["dashboard"]);
    console.log("this player" , this.player)
    this.pServer.AddPlayer(this.player).subscribe((data)=>{
      console.log("here respond from be " , data.msg );
     
    });
  }

}
