import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
  });

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email' : ['', Validators.required, Validators.email],
      'password' : ['', Validators.required]
      
    });
  }

  login(FormData: NgForm){
    console.log(FormData);
  }

}
