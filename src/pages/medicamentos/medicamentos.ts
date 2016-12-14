import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Medicamentos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-medicamentos',
  templateUrl: 'medicamentos.html'
})
export class MedicamentosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello MedicamentosPage Page');
  }

}
