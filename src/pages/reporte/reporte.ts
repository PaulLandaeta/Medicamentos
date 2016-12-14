import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Reporte page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reporte',
  templateUrl: 'reporte.html'
})
export class ReportePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ReportePage Page');
  }

}
