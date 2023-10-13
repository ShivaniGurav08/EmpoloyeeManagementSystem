import { style } from '@angular/animations';
import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    this.LoginForm=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',Validators.required)

    })
  }

  LoginForm:FormGroup|any;
  marqueeText = 'DEVELOPED BY Shivani ';
   
  getAlert()
  {
    alert("LOGIN SUCCESSFULLY !!!!!");
  }
}
