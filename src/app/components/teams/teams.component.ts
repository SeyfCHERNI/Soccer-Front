import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any = []; 

  constructor() { }

  ngOnInit() {

    this.teams = [
      {id :1,foundation: 'fcb',staduim: 'camp nou',name: 'laporta'},
      {id :2,foundation: 'rmd',staduim: 'bernabeau',name: 'perez'},
      {id :3,foundation: 'paris',staduim: 'parc de prince',name: 'nasser'},
      {id :4,foundation:'juve' ,staduim: 'juve area',name: 'nedved'},
      
    ];
  }

}
