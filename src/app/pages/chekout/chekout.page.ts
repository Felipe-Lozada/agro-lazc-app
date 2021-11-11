import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.page.html',
  styleUrls: ['./chekout.page.scss'],
})
export class ChekoutPage implements OnInit {


  public chArr = [];

  constructor(
    public sotrage: Storage,
    public navCtrl: NavController
  ) { }


  ionViewWillEnter(){
    this.checkChekout();
  }

  ngOnInit() {
  }

  checkChekout(){
    this.sotrage.create();
    this.sotrage.get('chekout')
      .then(
        (ch: any) => {
          if(ch.length > 0) {
            this.chArr = ch;
          }
        }
      )
      .catch(
        error => console.error(error)
      );
  }


  hacerPedido(){
    this.navCtrl.navigateBack('/tabs/home');
  }

}
