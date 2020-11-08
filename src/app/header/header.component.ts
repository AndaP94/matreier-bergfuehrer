import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Matreier Bergführer';
  logoSrc = 'assets/img/logo_international.png';
  constructor() { }

  ngOnInit(): void {
  }

}
