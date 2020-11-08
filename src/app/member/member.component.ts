import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../main-info/main-info.component';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  constructor() { }

  memberName = '';
  memberEmail = '';
  memberWebsiteLink = '';
  picUrl = '';
  @Input() member: Member;
  @Input() public name(name: string){
    this.memberName = name;
  }
  @Input() public email(email: string){
    this.memberEmail = email;
  }
  @Input() public link(link: string){
    this.memberWebsiteLink = link;
  }
  @Input() public url(url: string){
    this.picUrl = url;
  }

  ngOnInit(): void {
  }

}
