import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class ProductList {
  productList: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {


  
    let productListtest = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];
      let productList = 
{"error":false,"success":1,"message":"product list view","result":[{"entity_id":"1","name":"Faded Short Sleeves T-shirt","type_id":"simple","regular_price_with_tax":"16.51","regular_price_without_tax":"16.51","final_price_with_tax":"16.51","final_price_without_tax":"16.51","is_saleable":true,"is_stock":true,"image_url":"http:\/\/localhost\/newversion\/thirubuvanamsliksarees\/1-large_default\/faded-short-sleeves-tshirt.jpg","summary_rating":"rated","is_wishlist":false,"combinations":[]},{"entity_id":"2","name":"Blouse","type_id":"simple","regular_price_with_tax":"26.99","regular_price_without_tax":"26.99","final_price_with_tax":"26.99","final_price_without_tax":"26.99","is_saleable":true,"is_stock":true,"image_url":"http:\/\/localhost\/newversion\/thirubuvanamsliksarees\/7-large_default\/faded-short-sleeves-tshirt.jpg","summary_rating":"rated","is_wishlist":false,"combinations":[]},{"entity_id":"3","name":"Printed Dress","type_id":"simple","regular_price_with_tax":"25.99","regular_price_without_tax":"25.99","final_price_with_tax":"25.99","final_price_without_tax":"25.99","is_saleable":true,"is_stock":true,"image_url":"http:\/\/localhost\/newversion\/thirubuvanamsliksarees\/8-large_default\/faded-short-sleeves-tshirt.jpg","summary_rating":"rated","is_wishlist":false,"combinations":[]},{"entity_id":"4","name":"Printed Dress","type_id":"simple","regular_price_with_tax":"50.99","regular_price_without_tax":"50.99","final_price_with_tax":"50.99","final_price_without_tax":"50.99","is_saleable":true,"is_stock":true,"image_url":"http:\/\/localhost\/newversion\/thirubuvanamsliksarees\/10-large_default\/faded-short-sleeves-tshirt.jpg","summary_rating":"rated","is_wishlist":false,"combinations":[]},{"entity_id":"5","name":"Printed Summer Dress","type_id":"simple","regular_price_with_tax":"30.50","regular_price_without_tax":"30.50","final_price_with_tax":"30.50","final_price_without_tax":"30.50","is_saleable":true,"is_stock":true,"image_url":"http:\/\/localhost\/newversion\/thirubuvanamsliksarees\/12-large_default\/faded-short-sleeves-tshirt.jpg","summary_rating":"rated","is_wishlist":false,"combinations":[]},{"entity_id":"6","name":"Printed Summer Dress","type_id":"simple","regular_price_with_tax":"30.50","regular_price_without_tax":"30.50","final_price_with_tax":"30.50","final_price_without_tax":"30.50","is_saleable":true,"is_stock":true,"image_url":"http:\/\/localhost\/newversion\/thirubuvanamsliksarees\/16-large_default\/faded-short-sleeves-tshirt.jpg","summary_rating":"rated","is_wishlist":false,"combinations":[]},{"entity_id":"7","name":"Printed Chiffon Dress","type_id":"simple","regular_price_with_tax":"20.50","regular_price_without_tax":"20.50","final_price_with_tax":"20.50","final_price_without_tax":"20.50","is_saleable":true,"is_stock":true,"image_url":"http:\/\/localhost\/newversion\/thirubuvanamsliksarees\/20-large_default\/faded-short-sleeves-tshirt.jpg","summary_rating":"rated","is_wishlist":false,"combinations":[]},{"entity_id":"10","name":"Jangala","type_id":"simple","regular_price_with_tax":"8,888.89","regular_price_without_tax":"8,888.89","final_price_with_tax":"8,888.89","final_price_without_tax":"8,888.89","is_saleable":true,"is_stock":true,"image_url":"http:\/\/localhost\/newversion\/thirubuvanamsliksarees\/24-large_default\/faded-short-sleeves-tshirt.jpg","summary_rating":"rated","is_wishlist":false,"combinations":[]}],"total_count":8};


    for (let item of productList.result) {
      this.productList.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.productList;
    }

    return this.productList.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.productList.push(item);
  }

  delete(item: Item) {
    this.productList.splice(this.productList.indexOf(item), 1);
  }
}
