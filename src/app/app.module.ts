
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { TariffsComponent } from './tariffs/tariffs.component';
import { FooterComponent } from './footer/footer.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { MemberComponent } from './member/member.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule} from '@angular/common/http';
import {NgxGalleryModule} from '@kolkov/ngx-gallery';
import {ButtonsModule, CardsModule, CarouselModule, IconsModule, ModalModule, WavesModule} from 'angular-bootstrap-md';
import {SimplePdfViewerModule} from 'simple-pdf-viewer';
import {GalleriaModule} from 'primeng/galleria';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    TariffsComponent,
    FooterComponent,
    MainInfoComponent,
    MemberComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxGalleryModule,
    HttpClientModule,
    IconsModule,
    CarouselModule,
    CardsModule,
    ModalModule.forRoot(),
    ButtonsModule,
    WavesModule,
    BrowserModule,
    SimplePdfViewerModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


