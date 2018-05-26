import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LanchesPage } from '../lanches/lanches';
import { AcompanhamentosPage } from '../acompanhamentos/acompanhamentos';
import { ConfirmarPedidoPage } from "../confirmar-pedido/confirmar-pedido";
import { BebidasPage } from '../bebidas/bebidas';
import { PratosPage } from '../pratos/pratos';

@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html'
})
export class PedidoPage {

  constructor(public navCtrl: NavController) {
  }
  goToLanches(params){
    if (!params) params = {};
    this.navCtrl.push(LanchesPage);
  }goToAcompanhamentos(params){
    if (!params) params = {};
    this.navCtrl.push(AcompanhamentosPage);
  }goToPedido(params){
    if (!params) params = {};
    this.navCtrl.push(PedidoPage);
  }goToBebidas(params){
    if (!params) params = {};
    this.navCtrl.push(BebidasPage);
  }goToPratos(params){
    if (!params) params = {};
    this.navCtrl.push(PratosPage);
  }goToConfirmarPedido(params){
    if (!params) params = {};
    this.navCtrl.push(ConfirmarPedidoPage);
  }
}
