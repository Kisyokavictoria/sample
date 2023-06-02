import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string = "welcome to binding world"
  search: string = "";

  onclick(){
  this.message = "oops you clicked me";

  }
  onMouseOver(){
    this.message = "oops you keep your mouse away from the button";
  }
  inputSearch(eventDate:Event){
    this.search = (<HTMLInputElement>eventDate.target).value;

  }

}
