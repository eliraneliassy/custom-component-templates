import { SwiperComponent } from './swiper/swiper.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers = [6, 7, 8, 9];
  @ViewChild('swiper') swiper: SwiperComponent;

  next(){
    this.swiper.nav.next();
  }
}
