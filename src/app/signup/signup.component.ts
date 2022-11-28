import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name=""
  address=""
  pincode=""
  email=""
  phone=""
  password=""
  cpassword=""

  eventSign=()=>
  {
    let data2:any=
    {
      "name":this.name,
      "address":this.address,
      "pincode":this.pincode,
      "email":this.email,
      "phone":this.phone,
      "password":this.password,
      "cpassword":this.cpassword
    }
    console.log(data2)
  }



}
