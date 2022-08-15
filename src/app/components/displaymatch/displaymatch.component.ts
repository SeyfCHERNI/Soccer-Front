import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-displaymatch',
  templateUrl: './displaymatch.component.html',
  styleUrls: ['./displaymatch.component.css']
})
export class DisplaymatchComponent implements OnInit {
  id:any;
  findedmatch:any;

  constructor(private activatedRoute:ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() { 
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.matchService.getMatchById(this.id).subscribe((data)=> {this.findedmatch=data});
      

  }

}
