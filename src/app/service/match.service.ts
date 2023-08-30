import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
// Be address
matchURL: string = "http://localhost:3000/matches";
  constructor(private http:HttpClient) {}
  //request to get all matches
  getAllMatches(){
    return this.http.get<{allMatches: any}>(this.matchURL);
  }
  //request to get matches by  id 
  getMatcheById(id){
    // return this.http.get( this.match + "/" + id);
    return this.http.get<{match:any ; msg:string}>(`${this.matchURL}/${id}`);
  }
   //request to get matches by  id 
   deleteMatch(id){
    return this.http.delete<{msg:string}>(`${this.matchURL}/${id}`);
   }
   addMatch(obj){
    return this.http.post<{msg: string}>(this.matchURL , obj);
   }
   updateMatch(obj){
    return this.http.put<{msg:string}>(this.matchURL, obj);
   }
   searchMatchById(obj){
    return this.http.get(this.matchURL , obj);
   }

 
}
