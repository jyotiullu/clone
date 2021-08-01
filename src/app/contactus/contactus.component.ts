import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactusForm= new FormGroup({
  });

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.contactusForm = this.fb.group({
      'firstName' : ['', Validators.required],
      'lastName' : ['', Validators.required],
      'email' : ['', Validators.required, Validators.email],
      'message' : ['', Validators.required]
    });
  }

  sendMessage(FormData: NgForm){
    console.log(FormData);
  }

}
