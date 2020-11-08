
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NgxGalleryModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
