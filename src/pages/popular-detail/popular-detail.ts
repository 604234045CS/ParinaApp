import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-popular-detail',
  templateUrl: 'popular-detail.html',
})
export class PopularDetailPage {
  movie:any=[];
  search: string= '';
  items : string[];
  callMovie:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularDetailPage');
   this.movie = this.navParams.data;

   console.log(this.movie );
  }
 
 
  wacth(movieKey){
    this.navCtrl.push("WacthMoviePage",movieKey);
  }

  searchQuery(event){
    this.movie();
    this.items = this.items.filter((item)=>{

    })
  }

}
