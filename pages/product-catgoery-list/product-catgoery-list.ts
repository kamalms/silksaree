import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductCatgoeryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-catgoery-list',
  templateUrl: 'product-catgoery-list.html',
})
export class ProductCatgoeryListPage {
  cards = [
    {
      imageUrl: 'assets/img/card/card-saopaolo.png',
      title: 'São Paulo',
      subtitle: '41 Listings'
    },
    {
      imageUrl: 'assets/img/card/card-amsterdam.png',
      title: 'Amsterdam',
      subtitle: '64 Listings'
    },
    {
      imageUrl: 'assets/img/card/card-sf.png',
      title: 'San Francisco',
      subtitle: '72 Listings'
    },
    {
      imageUrl: 'assets/img/card/card-madison.png',
      title: 'Madison',
      subtitle: '28 Listings'
    }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductCatgoeryListPage');
  }

   cardTapped(card) {
    alert(card.title + ' was tapped.');
  }


}
