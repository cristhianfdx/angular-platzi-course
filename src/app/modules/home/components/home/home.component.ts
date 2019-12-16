import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  swiper: Swiper;

  // tslint:disable-next-line: ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.swiper = new Swiper('.swiper-container');
    }

  }

}
