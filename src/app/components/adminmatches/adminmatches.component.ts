import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-adminmatches',
  templateUrl: './adminmatches.component.html',
  styleUrls: ['./adminmatches.component.css']
})
export class AdminmatchesComponent implements OnInit {
  matches: any = [];

  constructor(private router:Router , private matchService:MatchService ) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe((data)=> {this.matches=data});
  }
  gotodisplay(x) {
    this.router.navigate([`displaymatch/${x}`]);
  }
  gotodelete(y) {
    this.matchService.deleteMatch(y).subscribe((data)=> {this.matches=data});
    

  }

}
