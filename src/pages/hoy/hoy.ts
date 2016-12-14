import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Hoy page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hoy',
  templateUrl: 'hoy.html'
})
export class Hoy {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HoyPage Page');
  }

}
