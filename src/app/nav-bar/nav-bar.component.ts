import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  activeTab = 'home';

  constructor() { }

  ngOnInit(): void {
  }
  //function to make screen component nav active
  getActiveTab(tabname : string) {
    this.activeTab = tabname;
  }

}
