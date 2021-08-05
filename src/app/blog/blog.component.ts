import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  blog = {
    tagline :'',
    title : '',
    posts : this.getBlog().posts,
  }

  constructor(private config : ConfigService) { }

  ngOnInit(): void {
    this.blog = this.getBlog()
  }

  getBlog() {
    return this.config.getConfig().blog;
  }

}
