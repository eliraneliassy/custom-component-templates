import { slides, slides2 } from './data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer2',
  template: `
    <app-swiper [slides]="slides" [slidesTemplate]="slidesTemplate"></app-swiper>

    <ng-template #slidesTemplate let-name let-index="index" let-nav="navigation">
        {{name}}
        <br>
        Index: {{index}}
        <br>
        <button (click)="nav.next()">CLICK HERE TO MOVE NEXT</button>
    <ng-template>
  `,
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component {
  slides = slides2;

}
