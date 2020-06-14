import { Component, TemplateRef, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {

  index = 0;
  @Input() options: number[] = [1, 2, 3, 4, 5];
  @Input() slidesTemplate: TemplateRef<any>;
  @Output() slideClicked: EventEmitter<number> = new EventEmitter<number>();

  private slidesPositions: any[];
  private currentItem = 0;

  nav = {
    next: () => this.next(),
    prev: () => this.prev()
  };

  constructor() { }
  ngAfterViewInit(): void {
    this.getSlides();
  }

  getSlides() {
    this.slidesPositions = [];
    document.querySelectorAll('.slide').forEach((div: any) => {
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

    document.querySelector('.slider').scrollTo({
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
