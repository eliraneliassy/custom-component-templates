import { Component, OnInit } from '@angular/core';
import { slides } from '../consumer2/data';

@Component({
  selector: 'app-consumer1',
  template: `
    <app-swiper [slides]="slides"></app-swiper>
  `,
  styleUrls: ['./consumer1.component.scss']
})
export class Consumer1Component {
  slides = slides.map(x => x.imageUrl);

}
