import { Component, TemplateRef, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {

  @Input() slides: string[];

  slidesPositions: any[];
  currentItem = 0;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  slide(direction: number) {
    this.currentItem += direction;

    if (this.currentItem > this.slidesPositions.length - 1) { this.currentItem = 0; }
    if (this.currentItem < 0) { this.currentItem = this.slidesPositions.length - 1; }

    this.document.querySelector('.slider').scrollTo({
      left: this.slidesPositions[this.currentItem],
      behavior: 'smooth'
    });
  }

  ngAfterViewInit(): void {
    this.getSlidesPositions();
  }

  getSlidesPositions() {
    this.slidesPositions = [];
    this.document.querySelectorAll('.slide').forEach((div: HTMLElement) => {
      this.slidesPositions.push(div.offsetLeft);
    });

  }

}
