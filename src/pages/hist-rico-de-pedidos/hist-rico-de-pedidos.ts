import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesDoPedidoPage } from '../detalhes-do-pedido/detalhes-do-pedido';

@Component({
  selector: 'page-hist-rico-de-pedidos',
  templateUrl: 'hist-rico-de-pedidos.html'
})
export class HistRicoDePedidosPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetalhesDoPedido(params){
    if (!params) params = {};
    this.navCtrl.push(DetalhesDoPedidoPage);
  }
}
