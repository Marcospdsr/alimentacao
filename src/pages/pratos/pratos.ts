import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcompanhamentosPage } from '../acompanhamentos/acompanhamentos';
import { PedidoPage } from '../pedido/pedido';
import { LanchesPage } from '../lanches/lanches';
import { BebidasPage } from '../bebidas/bebidas';
import { PratosPage } from '../pratos/pratos';

@Component({
  selector: 'page-pratos',
  templateUrl: 'pratos.html'
})
export class PratosPage {

  constructor(public navCtrl: NavController) {
  }
  goToAcompanhamentos(params){
    if (!params) params = {};
    this.navCtrl.push(AcompanhamentosPage);
  }goToPedido(params){
    if (!params) params = {};
    this.navCtrl.push(PedidoPage);
  }goToLanches(params){
    if (!params) params = {};
    this.navCtrl.push(LanchesPage);
  }goToBebidas(params){
    if (!params) params = {};
    this.navCtrl.push(BebidasPage);
  }goToPratos(params){
    if (!params) params = {};
    this.navCtrl.push(PratosPage);
  }
}
