import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //field
  SignupForm: FormGroup;

  ngOnInit(){
    this.SignupForm = new FormGroup({
  
      firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
      lastname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
      email: new FormControl(null , [Validators.email, Validators.required]),
      password: new FormControl(null , [Validators.minLength(4), Validators.required,]),
      confirmPassword: new FormControl(null, [Validators.minLength(4), Validators.required])
      
    },
    
    
      // validators:this.passwordValidator('password', 'confirmPassword')

    
    );
      
  }
  //functions
  onSubmit(){
    console.log(this.SignupForm.value);
  }

  noSpaceAllowed(control: FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return{noSpaceAllowed: true}
    }
    return null;

  }

  /* passwordValidator(password: any, confirmPassword:any){
    return(formGroup:FormGroup) => {
      const pwrdControl = formGroup.controls[password];
      const cpswrdControl = formGroup.controls[confirmPassword];
      if(cpswrdControl.errors && !cpswrdControl.errors['Mustmatch']){
        return;
      }
      if(pwrdControl.value !== cpswrdControl.value){
        cpswrdControl.setErrors({passwordValidator: true});
      }
      else{
        cpswrdControl.setErrors(null);
      }
    }
  } */

  

  
 
 

}