import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  activeTab = 'home';
  "noImplicitAny": false;

  constructor() { }

  ngOnInit(): void {
    
    (<any>$)(document).ready( () => {
      /*Responsive Navigation*/
      (<any>$)('#nav-mobile').html((<any>$)('#nav-main').html());
      (<any>$)('#nav-trigger span').on('click',() => {
        if ((<any>$)('nav#nav-mobile ul').hasClass('expanded')) {
          (<any>$)('nav#nav-mobile ul.expanded').removeClass('expande').slideUp(250);
          (<any>$)(this).removeClass("open");
          //it was actually (<any>$)(this).removeClass("open");
        } else {
          (<any>$)('nav#nav-mobile ul').addClass('expanded').slideDown(250);
          (<any>$)(this).addClass('open');
          // its actually (<any>$)(this).addClass('open');
        }
      });

      (<any>$)('#nav-mobile').html((<any>$)('#nav-main').html());
      (<any>$)('#nav-mobile ul a').on('click',function() {
        if ((<any>$)('nav#nav-mobile ul').hasClass('expanded')) {
          (<any>$)('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
          (<any>$)('#nav-trigger span').removeClass('pen');
        }
      });

      /* Sticky Navigation */
      if (!!(<any>$).prototype.stickyNavbar) {
        (<any>$)('#header').stickyNavbar();
      }

      (<any>$)('#content').waypoint(function (direction: string) {
        if (direction === 'down') {
          (<any>$)('#header').addClass('nav-solid fadeInDown');
        }
        else {
          (<any>$)('#header').removeClass('nav-solid fadeInDown');
        }
      });
    });
  }
  // //function to make screen component nav active
  getActiveTab(tabname : string) {
    this.activeTab = tabname;
  }
  
}