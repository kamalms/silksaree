import { Slide } from './../product-detail/product-detail';

import { NguCarousel } from '@ngu/carousel';

import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { Slides } from 'ionic-angular';



/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage implements OnInit  {

   slides: Slide[];
  
  showSkip = true;
  dir: string = 'ltr';
  public bestSellerProducts = [];

  images = ['ica-slidebox-img-1.jpg', 'ica-slidebox-img-2.jpg', 'ica-slidebox-img-3.jpg', 'ica-slidebox-img-2.jpg'];

   @ViewChild(Slides) slides1: Slides;
    cards = {
      imageUrl: 'assets/img/card/card-saopaolo.png',
      title: 'São Paulo',
      subtitle: '41 Listings'
    };


    greeting: string;
  testSlides: string[] = [];
  _options;
  @ViewChild('mySlider') mySlider: any;
   
   constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: values.TUTORIAL_SLIDE3_TITLE,
            description: values.TUTORIAL_SLIDE3_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-3.png',
          }
        ];
      });

      
      
    this._options = {
        slidesPerView:3,
        pager: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",        
        onInit:()=>{
        }
     }
  setTimeout(()=>{
        for (var i=1; i<6; i++) {
            this.testSlides.push("Slide - "+i);
          }
   },100);
  }
 onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }
  public carouselTileItems: Array<any>;
  public carouselTile: NguCarousel;

  cardTapped(card) {
    alert(card.title + ' was tapped.');
  }

  ngOnInit(){
    this.carouselTileItems = [0, 1, 2, 3, ];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: false,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngucarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 3,
      touch: true,
      easing: 'ease'
    }
  }

 
 

  

 

  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 5) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
}
