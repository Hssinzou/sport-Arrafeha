import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-table-matche',
  templateUrl: './table-matche.component.html',
  styleUrls: ['./table-matche.component.css']
})
export class TableMatcheComponent implements OnInit {
  //array of objects
  matchtesTab: any ;
  pageOfItems : Array<any> ;
  constructor(private myrooter:Router , 
    private matchService:MatchService) { }

  ngOnInit() {
this.reloadDta();
  }
  displayMatch(id: number) {
    this.myrooter.navigate([`match-info/${id}`])
  }
  editMatch(id: number) {
    localStorage.setItem("matchId" , JSON.stringify(id) )
    this.myrooter.navigate(["edit-match"])
  }
  deleteMatch(id: number) {
    // alert(`match ${id} is deleted`);
    this.matchService.deleteMatch(id).subscribe((response)=>{
      this.reloadDta();
    })
  }
  reloadDta(){
    this.matchService.getAllMatches().subscribe(
      (respond) =>{console.log("here reponse from Be" , respond);
      this.matchtesTab = respond.allMatches ;
    });
  }
  onChangePage(x: any) {
    // update current page of items
    this.pageOfItems = x;
  }
}
