import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup;


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signupform = this.formBuilder.group ({
    firstname: ['',[Validators.minLength(3),Validators.required]],
    lastname: ['',[Validators.minLength(5),Validators.required]],
    email: ['',[Validators.email,Validators.required]],
    password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
    confirmpassword: [''],
    
    });

  }
  signUp() {
    console.log("here user",this.signupform.value)
  }

}
