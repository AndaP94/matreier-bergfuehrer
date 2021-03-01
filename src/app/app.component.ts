import { Component } from '@angular/core';
import {AngularFaviconService} from 'angular-favicon';
import {PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matreier-bergfuehrer';

  constructor(private ngxFavicon: AngularFaviconService, private primengConfig: PrimeNGConfig) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.ngxFavicon.setFavicon('../assets/img/favicon-32x32.png');
  }


}
