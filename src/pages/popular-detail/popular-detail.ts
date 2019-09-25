import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,private tts: TextToSpeech,private fb: Facebook) {
 
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

  speak(talk : string){
    this.tts.speak(talk)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }

  notspeak(){
    this.tts.stop()
  }

  face(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
  }


}
