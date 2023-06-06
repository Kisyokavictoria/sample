import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  SigninForm: FormGroup;

  ngOnInit(){
    this.SigninForm = new FormGroup({
  
      email: new FormControl(null , [Validators.email, Validators.required]),
      password: new FormControl(null , [Validators.minLength(4), Validators.required,]),
    
      
    },
    
    
      // validators:this.passwordValidator('password', 'confirmPassword')

    
    );
      
  }
  onSubmit(){
    console.log(this.SigninForm.value);
  }


}




