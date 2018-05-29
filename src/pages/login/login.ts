import { User } from './../../Models/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public login = new User();

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    console.log('email: ' + this.login.email + ' senha: ' + this.login.senha)
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
