import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { searchStadiumTab, serachTeamsTab, } from 'src/app/data/serachStadium';

@Component({
  selector: 'app-search-team-stadium',
  templateUrl: './search-team-stadium.component.html',
  styleUrls: ['./search-team-stadium.component.css']
})
export class SearchTeamStadiumComponent implements OnInit {
  SearchForm: FormGroup
  stadiumTab: any = searchStadiumTab
  teamsTab: any = serachTeamsTab
  findedTeam;
  errorMsg: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.SearchForm = this.fb.group({
      Name: ["", [Validators.required, Validators.minLength(3)]],
    })
  }
  search() {
    let stadiumName = this.SearchForm.value.Name
    console.log("this name stadium", stadiumName);
    let findedStadiumId;
    // search stadium by name and return stadium id
    for (let i = 0; i < this.stadiumTab.length; i++) {
      if (this.stadiumTab[i].Name == stadiumName) {
        findedStadiumId = this.stadiumTab[i].id;
        break;
      }

    }
    if (findedStadiumId) {
      this.errorMsg = "";
      //sreach team by stadiumid
      for (let i = 0; i < this.teamsTab.length; i++) {
        if (this.teamsTab[i].stadiumId == findedStadiumId) {
          this.findedTeam = this.teamsTab[i];
          break;

        }

      }

    } else {
      this.errorMsg = "Team Not Found";
    }


  }

}
