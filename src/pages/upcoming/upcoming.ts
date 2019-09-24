import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {
  movieArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.UpcomingData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }
  UpcomingData(){
    let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=1a9aaaaecc790d8eb38b0862b7dd8563&language=en-US';
    this.http.get(url).subscribe(
      (data: any) => {
        console.log(data);
        this.movieArray = data.results;
      } , (error) => {
        console.log(error);
      }
    );
    
  }
  Detail(item){
    this.navCtrl.push("PopularDetailPage",item);
  }

}
