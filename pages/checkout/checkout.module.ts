// import { ProductListPage } from './../product-list/product-list';
// import { CardsPage } from './../cards/cards';
// import { LoginPage } from './../login/login';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutPage } from './checkout';
// import { SuperTabsModule } from 'ionic2-super-tabs';


@NgModule({
  declarations: [
    CheckoutPage,
    
  ],
  imports: [
    
    IonicPageModule.forChild(CheckoutPage),
    
    
     
  ],
   entryComponents: [
   
    

  ],
})
export class CheckoutPageModule {}
