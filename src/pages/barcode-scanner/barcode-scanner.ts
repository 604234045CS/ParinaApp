import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';



@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  codeData: any;
  scanData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }
  
  Scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      alert("Barcode data " + JSON.stringify(barcodeData));
      this.scanData = this.codeData;
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
