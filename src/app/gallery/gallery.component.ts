import {Component, Input, OnInit} from '@angular/core';

export interface Image{
  galleryImages: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}
export interface ResponsiveOption{
  breakpoint: string;
  numVisible: number;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  responsiveOptions: any[];
  public images: any[];

  public static getTile(title: string): string{
    let tl: string;
    if (title.includes('.jpg')){
      tl = title.replace('.jpg', '').replace('../assets/img-gallery/', '');
    }else if (title.includes('.jpeg')){
      tl = title.replace('jpeg', '').replace('../assets/img-gallery/', '');
    }else if (title.includes('.JPG')){
      tl = title.replace('.JPG', '').replace('../assets/img-gallery/', '');
    }else {
      tl = title;
    }
    return tl;
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
      ];

    this.images = [
      {
        galleryImages: '../assets/img-gallery/Großvenediger1.jpg',
        thumbnailImageSrc: '../assets/img-gallery/Großvenediger1.jpg',
        alt: GalleryComponent.getTile('../assets/-gallery/Großvenediger1.jpg'),
        title: GalleryComponent.getTile('../assets/-gallery/Großvenediger1.jpg')
      },
      {
        galleryImages: '../assets/img-gallery/IMG_1734.jpg',
        thumbnailImageSrc: '../assets/img-gallery/IMG_1734.jpg',
        alt: GalleryComponent.getTile('../assets/img-gallery/IMG_1734.jpg'),
        title: GalleryComponent.getTile('../assets/img-gallery/IMG_1734.jpg')
      },
      {
        galleryImages: '../assets/img-gallery/IMG_1735.jpg',
        thumbnailImageSrc: '../assets/img-gallery/IMG_1735.jpg',
        alt: GalleryComponent.getTile('../assets/img-gallery/IMG_1735.jpg'),
        title: GalleryComponent.getTile('../assets/img-gallery/IMG_1735.jpg')
      },
      {
        galleryImages: '../assets/img-gallery/IMG_1807.jpg',
        thumbnailImageSrc: '../assets/img-gallery/IMG_1807.jpg',
        alt: GalleryComponent.getTile('../assets/img-gallery/IMG_1807.jpg'),
        title: GalleryComponent.getTile('../assets/img-gallery/IMG_1807.jpg')
      },
      {
        galleryImages: '../assets/img-gallery/5-small.jpeg',
        thumbnailImageSrc: '../assets/img-gallery/5-medium.jpeg',
        alt: GalleryComponent.getTile('../assets/img-gallery/5-big.jpeg'),
        title: GalleryComponent.getTile('../assets/img-gallery/5-big.jpeg')
      }
    ];
  }
}
