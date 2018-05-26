import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PedidoPage } from '../pages/pedido/pedido';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AcompanhamentosPage } from '../pages/acompanhamentos/acompanhamentos';
import { HistRicoDePedidosPage } from '../pages/hist-rico-de-pedidos/hist-rico-de-pedidos';
import { DetalhesDoPedidoPage } from '../pages/detalhes-do-pedido/detalhes-do-pedido';
import { ConfirmarPedidoPage } from '../pages/confirmar-pedido/confirmar-pedido';
import { PratosPage } from '../pages/pratos/pratos';
import { LanchesPage } from '../pages/lanches/lanches';
import { BebidasPage } from '../pages/bebidas/bebidas';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PedidoPage,
    LoginPage,
    SignupPage,
    AcompanhamentosPage,
    HistRicoDePedidosPage,
    DetalhesDoPedidoPage,
    ConfirmarPedidoPage,
    PratosPage,
    LanchesPage,
    BebidasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PedidoPage,
    LoginPage,
    SignupPage,
    AcompanhamentosPage,
    HistRicoDePedidosPage,
    DetalhesDoPedidoPage,
    ConfirmarPedidoPage,
    PratosPage,
    LanchesPage,
    BebidasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}