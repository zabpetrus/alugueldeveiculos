import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title="seach me";
  todaydate: any;

  constructor( private service:SearchService) { }

  ngOnInit(): void {
    this.todaydate = this.service.showTodayDate();

  }

  submitSearch(data: string){
    console.log("button is working " + data);
    alert("Os dados são : " + data);
  }

}
