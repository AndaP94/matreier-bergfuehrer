import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Galleria} from 'primeng/galleria';

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
export class GalleryComponent implements OnInit, OnDestroy {
  @ViewChild('galleria') galleria: Galleria;
  showThumbnails: boolean;
  fullscreen = false;
  activeIndex = 0;
  onFullScreenListener: any;
  constructor() { }
  responsiveOptions: any[];
  public images: Image[];

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
    this.bindDocumentListeners();
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
      }
    ];
  }

  private onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
  }
  private bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener("fullscreenchange", this.onFullScreenListener);
    document.addEventListener("mozfullscreenchange", this.onFullScreenListener);
    document.addEventListener("webkitfullscreenchange", this.onFullScreenListener);
    document.addEventListener("msfullscreenchange", this.onFullScreenListener);
  }

  public closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    else if (document['mozCancelFullScreen']) {
      document['mozCancelFullScreen']();
    }
    else if (document['webkitExitFullscreen']) {
      document['webkitExitFullscreen']();
    }
    else if (document['msExitFullscreen']) {
      document['msExitFullscreen']();
    }
  }
  unbindDocumentListeners() {
    document.removeEventListener("fullscreenchange", this.onFullScreenListener);
    document.removeEventListener("mozfullscreenchange", this.onFullScreenListener);
    document.removeEventListener("webkitfullscreenchange", this.onFullScreenListener);
    document.removeEventListener("msfullscreenchange", this.onFullScreenListener);
    this.onFullScreenListener = null;
  }

  ngOnDestroy() {
    this.unbindDocumentListeners();
  }

  public galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  public fullScreenIcon() {
    console.log('fullscreen');
    return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
  }
  onThumbnailButtonClick() {
    this.showThumbnails = !this.showThumbnails;
  }

  toggleFullScreen() {
    if (this.fullscreen) {
      this.closePreviewFullScreen();
    }
    else {
      this.openPreviewFullScreen();
    }
  }
  openPreviewFullScreen() {
    let elem = this.galleria.element.nativeElement.querySelector(".p-galleria");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    else if (elem['mozRequestFullScreen']) { /* Firefox */
      elem['mozRequestFullScreen']();
    }
    else if (elem['webkitRequestFullscreen']) { /* Chrome, Safari & Opera */
      elem['webkitRequestFullscreen']();
    }
    else if (elem['msRequestFullscreen']) { /* IE/Edge */
      elem['msRequestFullscreen']();
    }
  }
}
