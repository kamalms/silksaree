import { LoginPage } from './../login/login';
import { ProductListPage } from './../product-list/product-list';
import { CardsPage } from './../cards/cards';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  page1: any = CardsPage;
  page2: any = LoginPage;
  page3: any = ProductListPage;
  

  constructor(public navCtrl: NavController) { }

}
