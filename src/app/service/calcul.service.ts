import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {
  calculUrl : string = "http://localhost:3000/calcul";

  constructor( private http:HttpClient) {}
  
}
