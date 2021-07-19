import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clone';
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello World';
  sayMessage() {
    alert(this.message);
  }

  canEdit = false;
  onEditClick() {
    this.canEdit = !this.canEdit;
    if(this.canEdit) {
      this.message = "You can edit me Now";
    }else {
      this.message = "I am read only";
    }
  }
}
