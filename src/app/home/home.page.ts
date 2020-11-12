
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  backdropVisible = false;
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;


  // Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };

  constructor( private router: Router
    ) {
      // Item object for Nature
      this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: '../../assets/slides/slide1.png'
          },
          {
            id: '../../assets/slides/slide2.png'
          },
          {
            id: '../../assets/slides/slide3.png'
          },
          {
            id: '../../assets/slides/slide4.png'
          },
        ]
      };
      // Item object for Food
      this.sliderTwo =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: '../../assets/user.png'
          },
          {
            id: '../../assets/google-logo.png'
          },
          {
            id: '../../assets/facebook-logo.png'
          },
          {
            id: '../../assets/logomobile.png'
          },
        ]
      };
      // Item object for Fashion
      this.sliderThree =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: '../../assets/user.png'
          },
          {
            id: '../../assets/google-logo.png'
          },
          {
            id: '../../assets/facebook-logo.png'
          },
          {
            id: '../../assets/logomobile.png'
          },
        ]
      };
    }

    toggleBackdrop(isVisible){
      this.backdropVisible = isVisible;
    }

    // Move to Next slide
    slideNext(object, slideView) {
      slideView.slideNext(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });
    }

    // Move to previous slide
    slidePrev(object, slideView) {
      slideView.slidePrev(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });;
    }

    // Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
      this.checkIfNavDisabled(object, slideView);
    }

    // Call methods to check if slide is first or last to enable disbale navigation
    checkIfNavDisabled(object, slideView) {
      this.checkisBeginning(object, slideView);
      this.checkisEnd(object, slideView);
    }

    checkisBeginning(object, slideView) {
      slideView.isBeginning().then((istrue) => {
        object.isBeginningSlide = istrue;
      });
    }
    checkisEnd(object, slideView) {
      slideView.isEnd().then((istrue) => {
        object.isEndSlide = istrue;
      });
    }

    navigate(){
      this.router.navigate(['../login']);
    }
  }

