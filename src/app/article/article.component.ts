import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
   
  post = {} 

  constructor(private route:ActivatedRoute, private config:ConfigService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    //this.post = this.config.getPostByID(id);
    this.post = this.getPostByID(id);
  }

  getPostByID(id:number) {
    return this.config.getPostByID(id);
  }

}
