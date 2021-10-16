import { Component } from '@angular/core';

import getToken from 'totp-generator';

//let totp = require('totp-generator');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ionViewDidEnter(){
    console.log("afterViewDidEnter")
    let token=getToken("NG34TAMDU7TWMHPJV4SJTWRX237HSRJR",{
      //period:60,
      //algorithm:'SHA-1',
      digits:6
    })

    console.log(token);
  }

}
