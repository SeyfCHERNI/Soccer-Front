import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
  team: any = {};
  addteamform: FormGroup;

  constructor(private  formbuilder:FormBuilder, private ronuter:Router) { }

  ngOnInit() {
    this.addteamform = this.formbuilder.group ({
      name: [''],
      foundation: [''],
      owner: [''],
      stadium: [''],
    })
    }
    addTatch() {
      let teamID = JSON.parse(localStorage.getItem('teamID') || '1');
      let allteams = JSON.parse(localStorage.getItem("teams") || '[]' );
      this.team.id = teamID;
      allteams.push(this.team);
      localStorage.setItem("team",JSON.stringify(allteams));
      localStorage.setItem("teamID",teamID + 1);
      this.ronuter.navigate(['dashboard']);
  
    }
  }

