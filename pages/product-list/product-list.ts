import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { ProductList } from '../../providers/providers';



@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  currentItems: Item[];
  row;
  images: Array<string>;  
  grid: Array<Array<string>>; //array of arrays
  
  constructor(public items: ProductList) {



   //   this.currentItems = this.items.query();
       console.log('ionViewDidLoad ProductListPage' ,  this.items.query());
       this.row =  this.items.query();
       this.currentItems = Array.from(Array(Math.ceil(this.row.length / 2)).keys())
  }

  ionViewDidLoad() {



    
 this.row =  this.items.query();
    
  let rowNum = 0; //counter to iterate over the rows in the grid

  for (let i = 0; i < this.row.length; i+=2) { //iterate images

    this.grid[rowNum] = Array(2); //declare two elements per row

    if (this.row[i]) { //check file URI exists
      this.grid[rowNum][0] = this.row[i] //insert image
    }

    if (this.row[i+1]) { //repeat for the second image
      this.grid[rowNum][1] = this.row[i+1]
    }

    console.log(' this.grid',  this.grid);
    rowNum++; //go on to the next row
  }
}
 itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
