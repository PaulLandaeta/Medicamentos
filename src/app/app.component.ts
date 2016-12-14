import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Home } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SlidesPage } from '../pages/slides/slides';
import { Hoy } from '../pages/hoy/hoy';
import { Reporte } from '../pages/reporte/reporte';
import { MedicamentosPage } from '../pages/medicamentos/medicamentos';
import { FarmaciasPage } from '../pages/farmacias/farmacias';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = Home;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: Home },
      { title: 'My First List', component: ListPage },
      { title: 'Slides', component: SlidesPage },
      { title: 'Hoy', component: Hoy },
      { title: 'Reporte', component: Reporte },
      { title: 'Reporte', component: MedicamentosPage },
      { title: 'Reporte', component: FarmaciasPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
