import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminteams',
  templateUrl: './adminteams.component.html',
  styleUrls: ['./adminteams.component.css']
})
export class AdminteamsComponent implements OnInit {
  teams: any = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem('team'));

  }
  gotodisplay(id) {
    this.router.navigate([`teaminfo/${id}`]);
    
  }

}
