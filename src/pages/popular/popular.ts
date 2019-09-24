
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  movieArray = [];
  provider : any;
  search : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loadingController:LoadingController) {
   this.PopularData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }

  PopularData(){
    let url ='https://api.themoviedb.org/3/movie/popular?api_key=1a9aaaaecc790d8eb38b0862b7dd8563&language=en-US';
    this.http.get(url).subscribe((data: any) => {
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

  onSearch(event){
    const qu = this.PopularData['url']+ 'search/movie?query';
    this.search = qu['results.original_title'];
    console.log(this.search);
  }


  
}
