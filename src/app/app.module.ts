import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { SlidesPage } from '../pages/slides/slides';
import { Hoy } from '../pages/hoy/hoy';
import { Reporte } from '../pages/reporte/reporte';
import { FarmaciasPage } from '../pages/farmacias/farmacias';
import { MedicamentosPage } from '../pages/medicamentos/medicamentos';

@NgModule({
  declarations: [
    MyApp,
    Home,
    ItemDetailsPage,
    ListPage,
    SlidesPage,
    Hoy,
    Reporte,
    FarmaciasPage,
    MedicamentosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    ItemDetailsPage,
    ListPage,
    SlidesPage,
    Hoy,
    Reporte,
    FarmaciasPage,
    MedicamentosPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
