import { Component, OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '800px',
        height: '800px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: '../assets/img-gallery/Großvenediger1.jpg',
        medium: '../assets/img-gallery/Großvenediger1.jpg',
        big: '../assets/-gallery/Großvenediger1.jpg'
      },
      {
        small: '../assets/img-gallery/IMG_1734.jpg',
        medium: '../assets/img-gallery/IMG_1734.jpg',
        big: '../assets/img-gallery/IMG_1734.jpg'
      },
      {
        small: '../assets/img-gallery/IMG_1735.jpg',
        medium: '../assets/img-gallery/IMG_1735.jpg',
        big: '../assets/img-gallery/IMG_1735.jpg'
      },{
        small: '../assets/img-gallery/IMG_1807.jpg',
        medium: '../assets/img-gallery/IMG_1807.jpg',
        big: '../assets/img-gallery/IMG_1807.jpg'
      },
      {
        small: '../assets/img-gallery/5-small.jpeg',
        medium: '../assets/img-gallery/5-medium.jpeg',
        big: '../assets/img-gallery/5-big.jpeg'
      }
    ];
  }

}
