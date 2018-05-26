import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidoPage } from '../pedido/pedido';
import { LanchesPage } from '../lanches/lanches';
import { BebidasPage } from '../bebidas/bebidas';
import { PratosPage } from '../pratos/pratos';

@Component({
  selector: 'page-acompanhamentos',
  templateUrl: 'acompanhamentos.html'
})
export class AcompanhamentosPage {

  constructor(public navCtrl: NavController) {
  }
  goToPedido(params){
    if (!params) params = {};
    this.navCtrl.push(PedidoPage);
  }goToLanches(params){
    if (!params) params = {};
    this.navCtrl.push(LanchesPage);
  }goToAcompanhamentos(params){
    if (!params) params = {};
    this.navCtrl.push(AcompanhamentosPage);
  }goToBebidas(params){
    if (!params) params = {};
    this.navCtrl.push(BebidasPage);
  }goToPratos(params){
    if (!params) params = {};
    this.navCtrl.push(PratosPage);
  }
}
