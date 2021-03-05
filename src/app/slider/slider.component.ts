import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderImgsSrc: string[] = [];
  sliderHeaderList: string[] = [];
  sliderTextList: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadSlider();
  }

  private loadSlider(){
    for (let i = 1; i < 4; i++){
      const dir = 'assets/img/slider/Slider' + i + '.jpg';
      this.sliderImgsSrc.push(dir);
    }
    const header1 = 'Bergführerverein Matrei in Osttirol';
    const text1 = 'Als am August 1865 eine Gruppe von Bergsteigern den Großvenediger von Innergschlöß erklomm, war ein Matreier Bergführer das erste mal namentlich erwähnt worden - der Nantlis Franz. Aus den bisherigen Trägern für die Hütte das Bergführerwesen in unserer Region. So organisierte Johann Stüdl die Vermittlung von Bergführern in unserer Region. Das erste Bergführer Büro entstand im Jahre 1880 im Gasthaus Wohlgemut das heutige Rathaus';
    const header2 = 'Unser Ziel';
    const text2 = 'Unser Ziel ist es die eigenheiten unserer geliebten Berge in Nationalpark Hohe Tauern unsern Gäste behutsam weiterzugeben, den Bergsport zu fördern und sicher die Berge zu besteigen.\n' +
      '        Die ständige persönliche Aus- und Weiterbildung der Mitglieder auf technischer und persönlicher Ebene bietet die größtmögliche Sicherheit für unsere Gäste.\n' +
      '        Der Hoangscht (miteinander reden) kommt auch nicht zu kurz, so wissen wir immer die aktuellen Verhältnisse am Berg.';
    const header3 = 'Unser Angebot';
    const text3 = 'GROSSVENEDIGER,\n' +
      '        KLETTERN AM FALKENSTEIN - DOLOMITEN,\n' +
      '        GROSSGLOCKNER,\n' +
      '        WANDERUNGEN IN NATIONALPARK HOHE TAUERN,\n' +
      '        SKITOUREN,\n' +
      '        EISKLETTERN';
    this.sliderHeaderList.push(header1, header2, header3);
    this.sliderTextList.push(text1, text2, text3);
  }

}
