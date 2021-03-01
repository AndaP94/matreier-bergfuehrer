import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md/lib/free/modals';
export enum TariffsType {
  'summer'= 'summer',
  'winter' = 'winter'
}

@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss']
})
export class TariffsComponent implements OnInit {
  summerPdf = '/assets/tariffs/Tarifblatt_BFMatrei.pdf';
  winterPdf = '/assets/tariffs/Tarifblatt_BFMatrei-Winter.pdf';
  tariffsType = TariffsType;
  @ViewChild('basicModal') public loadedId: ModalDirective;

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(tariffType: TariffsType){
    const link = document.createElement('a');
    switch (tariffType){
      case TariffsType.summer:
        link.download = 'Tarifblatt_BFMatrei';
        link.href = this.summerPdf;
        link.click();
        break;
      case TariffsType.winter:
        link.download = 'Tarifblatt_BFMatrei-Winter';
        link.href = this.winterPdf;
        link.click();
        break;
    }
  }
}
