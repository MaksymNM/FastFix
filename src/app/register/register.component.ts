import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm:FormGroup
  constructor() {
    this.signUpForm = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.email]),
      "password": new FormControl("", Validators.required),
      "name": new FormControl("", Validators.required),
      "surname": new FormControl("", Validators.required)
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    this.signUpForm.reset()
  }

}
