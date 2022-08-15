import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminplayers',
  templateUrl: './adminplayers.component.html',
  styleUrls: ['./adminplayers.component.css']
})
export class AdminplayersComponent implements OnInit {
  players: any = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem("players"));
  }
  gotodisplay(x) {
    this.router.navigate([`displayplayer/${x}`]);
  }

}
