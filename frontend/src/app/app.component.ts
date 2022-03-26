import { Component } from '@angular/core';
import { AngularServiceService } from './angular-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'rentacar';
  constructor( public service:AngularServiceService){
  }

  clickFunction(){
    console.log("button is working ");
    this.service.javaCall();
  }

}
