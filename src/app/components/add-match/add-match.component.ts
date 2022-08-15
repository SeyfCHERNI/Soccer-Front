import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { MatchesComponent } from '../matches/matches.component';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any = {};
  addmatchform: FormGroup;
  private router: Router
  


  constructor(private  formbuilder:FormBuilder, private MatchService:MatchService) { }

  ngOnInit() {
    this.addmatchform = this.formbuilder.group ({
      scoreOne: [''],
      scoretwo: [''],
      team1: [''],
      team2: [''],

    })
  }
  addMatch() {
    // let matchID = JSON.parse(localStorage.getItem('matchID') || '1');
    // let allmatches = JSON.parse(localStorage.getItem("match") || '[]' );
    // this.match.id = matchID;
    // allmatches.push(this.match);
    // localStorage.setItem("match",JSON.stringify(allmatches));
    // localStorage.setItem("matchID",matchID + 1);   CTRL + : = comment 
    this.MatchService.addMatch(this.match).subscribe((data)=>{console.log("here is the match",data)});
    this.router.navigate(["dashboard"]);


  }

}
