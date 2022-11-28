import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user=""
  password=""
  eventLogin=()=>
  {
    let data:any={"user":this.user,
    "password":this.password
  }
console.log(data)
  }
}
