import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMenuPage');
  }
  Now(){
    this.navCtrl.push("NowPlayingPage");
  }

  Upcoming(){
    this.navCtrl.push("UpcomingPage");
  }
  Popular(){
    this.navCtrl.push("PopularPage");
  }
  TopRated(){
    this.navCtrl.push("TopRatedPage");
  }
}
