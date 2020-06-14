import { Component, TemplateRef, Input, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {

  index = 0;
  @Input() options;
  @Input() slidesTemplate: TemplateRef<any>;
  @Output() slideClicked: EventEmitter<number> = new EventEmitter<number>();

  private slidesPositions: any[];
  private currentItem = 0;

  nav = {
    next: () => this.next(),
    prev: () => this.prev()
  };

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngAfterViewInit(): void {
    this.getSlides();
    console.log(this.options);
  }

  getSlides() {
    this.slidesPositions = [];
    this.document.querySelectorAll('.slide').forEach((div: HTMLElement) => {
      this.slidesPositions.push([div.offsetLeft, div.offsetLeft + div.offsetWidth]);
    });

  }

  slide(num: number) {
    this.currentItem += num;

    if (this.currentItem > this.slidesPositions.length - 1) {
      this.currentItem = 0;
    }

    if (this.currentItem < 0) {
      this.currentItem = this.slidesPositions.length - 1;
    }

    this.document.querySelector('.slider').scrollTo({
      left: this.slidesPositions[this.currentItem][0],
      behavior: 'smooth'
    });

  }

  prev() {
    this.slide(-1);
  }

  next() {
    this.slide(1);
  }

}
