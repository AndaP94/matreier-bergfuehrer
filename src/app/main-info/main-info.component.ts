import { Component, OnInit } from '@angular/core';

export interface Member{
  name: string;
  email: string;
  website: string;
  picLink: string;
}

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {
  exampleEmail = 'example@test.at';
  public members: Member[] = [];
  constructor() { }

  ngOnInit(): void {
    this.createMembers();
  }
  private createMembers(){
    this.members = [{
      name: 'Lukas Pichler',
      email: 'lukas.pichler82@gmx.at',
      website: 'https://alpin-pichler.at',
      picLink: '../assets/img/img-edit/Bergführer Matrei-2.jpg'
    },
      {
      name: 'Isidor Poppeller',
      email: 'info@bergfuehrer-isidor.at',
      website: 'https://www.bergfuehrer-isidor.at/de/',
      picLink: '../assets/img/img-edit/Bergführer Matreiisidor-3.jpg'
    },
      {
        name: 'Alban Resinger',
        email: 'resy@gmx.net',
        website: 'https://bergfuehrer-matrei.at',
        picLink: '../assets/img/img-edit/Bergführer Matrei-Alban.jpg'
      },
      {
        name: 'Emanuel Egger',
        email: 'e.egger@hohetauern.at',
        website: 'https://bergfuehrer-matrei.at',
        picLink: '../assets/img/img-edit/Bergführer Matrei-Alban.jpg'
      }
    ];
  }
}
