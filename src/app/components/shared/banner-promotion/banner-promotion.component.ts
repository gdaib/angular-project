import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-promotion',
  templateUrl: './banner-promotion.component.html',
  styleUrls: ['./banner-promotion.component.sass']
})
export class BannerPromotionComponent implements OnInit {

  constructor() { }
  contentLoaded = false;
  ngOnInit() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000);
  }

}
