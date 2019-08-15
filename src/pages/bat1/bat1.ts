import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-bat1',
  templateUrl: 'bat1.html',
  providers: [BatteryStatus]
})
export class Bat1Page {
  btIvI : any;
  btstat : any;
  subscription: any;
  Level : any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bat1Page');
  }
  checkBatstatus(){
    this.batteryStatus.onChange().subscribe(
      (status) => {
        console.log(status.level, status.isPlugged);
        this.Level = status.level;
      });
  }


  stBatcheck(){
    this.subscription.unsubscribe();
  }

}
