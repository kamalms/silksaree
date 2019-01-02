import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductCatgoeryListPage } from './product-catgoery-list';

@NgModule({
  declarations: [
    ProductCatgoeryListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCatgoeryListPage),
  ],
})
export class ProductCatgoeryListPageModule {}
