import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
  addarticleform:FormGroup;
  


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.addarticleform = this.formBuilder.group ({
      addarticle: [''],
      title: [''],
      description: [''],
      date: [''],
      category: [''],
      });
  }
  addArticle() {
    console.log("here article",this.addarticleform.value)
  }
   
}
