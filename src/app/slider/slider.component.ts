import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  srcSliderImg1 = 'assets/img/Alpin-Pichler-best-5.jpg';
  srcSliderImg2 = 'assets/img/BGFMatrei.JPG';
  srcSliderImg3 = 'assets/img/GrossvenedigerBGFMatrei.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
