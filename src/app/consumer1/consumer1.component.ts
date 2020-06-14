import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.scss']
})
export class Consumer1Component implements OnInit {

  numbers = [6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

}
