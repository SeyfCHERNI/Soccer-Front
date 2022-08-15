import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  player: any = {};
  addplayerform: FormGroup;

  constructor(private  formbuilder:FormBuilder) { }

  ngOnInit() {
    this.addplayerform = this.formbuilder.group ({
      name: [''],
      number: [''],
      poste: [''],
      age: [''],
    })
    }
    addPlayer() {
      let playerID = JSON.parse(localStorage.getItem('playerID') || '1');
      let allplayers = JSON.parse(localStorage.getItem("player") || '[]' );
      this.player.id = playerID;
      allplayers.push(this.player);
      localStorage.setItem("player",JSON.stringify(allplayers));
      localStorage.setItem("playerID",playerID + 1);
  
    }

}

