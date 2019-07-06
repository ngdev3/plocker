import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

/*
  Generated class for the BridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BridgeProvider {

  constructor(
    public http: HttpClient,
    // private sqlite: SQLite
    ) {
    console.log('Hello BridgeProvider Provider');
  }

  createTable(){
    console.log("Create Table")
  }

}
  