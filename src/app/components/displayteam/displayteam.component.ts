import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayteam',
  templateUrl: './displayteam.component.html',
  styleUrls: ['./displayteam.component.css']
})
export class DisplayteamComponent implements OnInit {
  id:any;
  team:any;



  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedroute.snapshot.paramMap.get('id');
    let teams = JSON.parse(localStorage.getItem('teams'));
    this.team = teams.find((obj)=>{return obj.id == this.id});
    console.log('here finded team',this.team);

  }


}
