import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { SlidesPage } from '../slides/slides';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  itemTapped(menu) {
    switch (menu) {
      case "SlidesPage":
        this.navCtrl.push(SlidesPage, {});
      default:
    }
  }
}
