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
      picLink: '../assets/img/team/luki.JPG'
    },
      {
      name: 'Isidor',
      email: this.exampleEmail,
      website: 'https://alpin-pichler.at',
      picLink: '../assets/img/team/isidor.JPG'
    },
      {
        name: 'Alban Resinger',
        email: 'resy@gmx.net',
        website: 'https://alpin-pichler.at',
        picLink: '../assets/img/team/alban.jpg'
      }
    ];
  }
}
