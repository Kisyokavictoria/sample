import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  reactiveForm: FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstname:new FormControl(null, Validators.required),
      lastname:new FormControl(null, Validators.required),
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(4)]),
      /*  When we create a form group we pass objects to it*/
      

      
    });

  }
  onSubmit(){
    console.log(this.reactiveForm)/* the objects inside the this.reactiveForm is initiated when the button is clicked */
  }

   
}
