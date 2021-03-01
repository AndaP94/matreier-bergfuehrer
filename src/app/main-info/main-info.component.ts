import { Component, OnInit } from '@angular/core';

export interface Member{
  name: string;
  email: string;
  website: string;
  picLink: string;
  shortWebUri: string;
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
      picLink: '../assets/img/img-edit/Bergführer Matrei-2.jpg',
      shortWebUri: 'alpin-pichler.at'
    },
      {
      name: 'Isidor Poppeller',
      email: 'info@bergfuehrer-isidor.at',
      website: 'https://www.bergfuehrer-isidor.at/de/',
      picLink: '../assets/img/img-edit/Bergführer Matreiisidor-3.jpg',
        shortWebUri: 'bergfuehrer-isidor.at'
    },
      {
        name: 'Alban Resinger',
        email: 'resy@gmx.net',
        website: 'https://bergfuehrer-matrei.at',
        picLink: '../assets/img/img-edit/Bergführer Matrei-Alban.jpg',
        shortWebUri: 'bergfuehrer-matrei.at'
      },
      {
        name: 'Emanuel Egger',
        email: 'e.egger@hohetauern.at',
        website: 'https://bergfuehrer-matrei.at',
        picLink: '../assets/img/team/EmanuelEgger.jpg',
        shortWebUri: 'bergfuehrer-matrei.at'
      },
      {
        name: 'Rebekka Egger',
        email: 'info@bergführer-matrei.at',
        website: 'https://bergfuehrer-matrei.at',
        picLink: '../assets/img/team/RebekkaEgger.jpg',
        shortWebUri: 'bergfuehrer-matrei.at'
      },
      {
        name: 'Maria Mattersberger',
        email: 'info@bergführer-matrei.at',
        website: 'https://bergfuehrer-matrei.at',
        picLink: '../assets/img/team/MariaMattersberger.jpg',
        shortWebUri: 'bergfuehrer-matrei.at'
      },
      {
        name: 'Franz Holzer',
        email: 'franzholzer1966@icloud.com',
        website: 'https://bergfuehrer-matrei.at',
        picLink: '../assets/img/team/Franz Holzer.JPG',
        shortWebUri: 'bergfuehrer-matrei.at'
      }
    ];
  }
}
