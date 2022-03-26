import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  showTodayDate(): string {
    throw new Error('Method not implemented.');
  }


  constructor( private  http: HttpClient) { }

  javaCall(){
    console.log(" services is working fine.......");
    this.http.get('http://localhost:8082/foo').subscribe(
    data=>{
    console.log("sucess result");
         }
       );
    }
}
