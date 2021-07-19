import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonials = {
    tagline :'',
    title : '',
    feedbacks : this.getTestimonials().feedbacks
  }

  constructor(private config : ConfigService) { }

  ngOnInit(): void {
    this.testimonials = this.getTestimonials();
  }

  getTestimonials() {
    return this.config.getConfig().testimonials;
  }

}
