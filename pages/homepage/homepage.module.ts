import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomepagePage } from './homepage';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    HomepagePage,
  ],
  imports: [
    NguCarouselModule,
    IonicPageModule.forChild(HomepagePage),
    
  ],
})
export class HomepagePageModule {}
