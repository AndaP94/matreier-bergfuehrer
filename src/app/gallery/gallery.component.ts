import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Galleria} from 'primeng/galleria';
import {HttpClient} from '@angular/common/http';

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

export interface ImgJson{
  data: Image[];
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy, AfterViewInit {
  public constructor(private http: HttpClient) {
  }
  @ViewChild('galleria') galleria: Galleria;
  showThumbnails: boolean;
  fullscreen = false;
  activeIndex = 0;
  onFullScreenListener: any;
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
    this.http.get('assets/img-json/gallery-images.json').subscribe((obs: ImgJson) => {
      this.images = obs.data;
    });
  }
  ngAfterViewInit() {
  }

  private onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
  }
  private bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener('fullscreenchange', this.onFullScreenListener);
    document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.addEventListener('msfullscreenchange', this.onFullScreenListener);
  }

  public closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
    document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
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
    const elem = this.galleria.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    }
    else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    }
    else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
}
