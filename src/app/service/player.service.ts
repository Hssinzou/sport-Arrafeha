import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PlayerURL:string="http://localhost/3000/players";

  constructor(private http:HttpClient) {}

AddPlayer(obj){
 return this.http.post<{ msg : string}>(this.PlayerURL,obj);
}
editPlayer(obj){
 return this.http.put(this.PlayerURL , obj);
}
deletePlayer(id){
this.http.delete(`${this.PlayerURL}/${id}`);
}
getAllPlayers(){
  return this.http.get(this.PlayerURL);
}
getPlayerById(id){
  return this.http.get(`${this.PlayerURL}/${id}`);
}
getPlayerByNameOrAge(obj){
  return this.http.post<{players : any}>(
    this.PlayerURL + "/searchPlayer" , 
    obj);
}

}
