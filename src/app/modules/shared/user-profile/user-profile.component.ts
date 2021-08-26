import { Component, Input, OnInit } from '@angular/core';
import { UserProfileModel } from 'src/app/models/user-profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() UserInfo: UserProfileModel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
