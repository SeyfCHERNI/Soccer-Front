import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any = []; 
  actualDate:Date;
  title:string = 'here all matches';

  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.actualDate = new Date();
    this.matches=this.matchService.getAllMatches().subscribe((data)=> {this.matches=data});

  }

}
