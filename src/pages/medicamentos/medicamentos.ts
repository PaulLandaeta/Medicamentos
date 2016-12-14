import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
/*
  Generated class for the Medicamentos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'page-medicamentos',
  templateUrl: 'medicamentos.html'
})
export class MedicamentosPage {
  medicamentos: string = "Todos";
  isAndroid: boolean = false;
  abc: any = [];

  constructor(public navCtrl: NavController,platform: Platform) {
    for(let i=65;i<=90;i++){
      this.abc.push(String.fromCharCode(i));
    }
     this.isAndroid = platform.is('android');
  }

  heroes = HEROES;

  ionViewDidLoad() {
    console.log('Hello MedicamentosPage Page');
    console.log(this.abc);
  }

}
