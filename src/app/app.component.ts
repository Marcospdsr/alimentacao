import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PedidoPage } from '../pages/pedido/pedido';
import { LanchesPage } from '../pages/lanches/lanches';
import { AcompanhamentosPage } from '../pages/acompanhamentos/acompanhamentos';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { PratosPage } from '../pages/pratos/pratos';
import { HistRicoDePedidosPage } from '../pages/hist-rico-de-pedidos/hist-rico-de-pedidos';
import { DetalhesDoPedidoPage } from '../pages/detalhes-do-pedido/detalhes-do-pedido';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToPedido(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PedidoPage);
  }goToLanches(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LanchesPage);
  }goToAcompanhamentos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AcompanhamentosPage);
  }goToBebidas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BebidasPage);
  }goToPratos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PratosPage);
  }goToHistRicoDePedidos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistRicoDePedidosPage);
  }goToDetalhesDoPedido(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DetalhesDoPedidoPage);
  }
}
