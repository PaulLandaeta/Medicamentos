import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { SlidesPage } from '../slides/slides';
import { Hoy } from '../hoy/hoy';
import { Reporte } from '../reporte/reporte';
import { FarmaciasPage } from '../farmacias/farmacias';
import { MedicamentosPage } from '../medicamentos/medicamentos';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  itemTapped(menu) {
    switch (menu) {
      case "SlidesPage":
        this.navCtrl.push(SlidesPage, {});
        break;
      case "Hoy":
        this.navCtrl.push(Hoy,{});break;
      case "Reporte":
        this.navCtrl.push(Reporte,{});break;
      case "Farmacias":
        this.navCtrl.push(FarmaciasPage,{});break;
      case "Medicamentos":
        this.navCtrl.push(MedicamentosPage,{});break;
      default:
    }
  }
}
