import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL:string="http://localhost/3000/teams";

  constructor(private http:HttpClient) {}
  AddTeam(obj){
    return this.http.post(this.teamURL , obj);
  }
  editTeam(obj){
    return this.http.put(this.teamURL , obj);
  }
  deleteTeam(id){
    this.http.delete(`${this.teamURL}/${id}`);
  }
  getAllTeams(){
   return this.http.get(this.teamURL);
  }
  getTeamById(id){
   return this.http.get(`${this.teamURL}/${id}`);
  }
}
