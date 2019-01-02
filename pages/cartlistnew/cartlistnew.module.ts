import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartlistnewPage } from './cartlistnew';
// import { InputCounterComponent } from 'angular2-input-counter';

@NgModule({
  declarations: [
    CartlistnewPage,
  //  InputCounterComponent
  ],
  imports: [
    IonicPageModule.forChild(CartlistnewPage),
   // InputCounterComponent
  ],
})
export class CartlistnewPageModule {}


