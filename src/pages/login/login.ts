import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BridgeProvider } from "../../providers/bridge/bridge";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  login = {
    username: '',
    password: ''
  }
  
  constructor(
    public navCtrl: NavController, 
    public bridge: BridgeProvider,
    private http: HttpClient,

    public navParams: NavParams
    ) {
  
  this.bridge.createTable()
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){

  }

}
