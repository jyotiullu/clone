import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  intro = {
    tagline :'',
    title : '',
    description : '',
    features : this.getFeatures()
  }
  
  constructor(private config : ConfigService) { }

  ngOnInit(): void {
    this.intro = this.getIntro();

  }
  getIntro() {
    return this.config.getConfig().intro;
  }
  getFeatures() {
    return this.config.getConfig().intro.features;
  }

}
