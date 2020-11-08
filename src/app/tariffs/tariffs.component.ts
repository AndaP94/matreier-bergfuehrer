import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss']
})
export class TariffsComponent implements OnInit {
  buttonTextSummer = 'Tariffe Sommer';
  buttonTextWinter = 'Tariffe Winter';
  imgSrcWinter = 'assets/img-gallery/IMG_3117.JPG';
  imgSrcSummer = 'assets/img-gallery/IMG_3147.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
