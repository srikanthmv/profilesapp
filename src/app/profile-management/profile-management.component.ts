import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from '../models/user-profile.model';
import { BehaviorSubject, from } from 'rxjs';
import { ProfileService } from '../services/profile.service';
import { UserResponseModel } from '../models/user-response.model';
import { FormControl } from '@angular/forms';
import { CONSTANTS } from '../constants';
import { mergeMap } from "rxjs/operators";
import { range } from '../utils';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css']
})
export class ProfileManagementComponent implements OnInit {
  usersList: BehaviorSubject<UserProfileModel[]> = new BehaviorSubject<UserProfileModel[]>([]);
  searchInput: FormControl = new FormControl('');
  deafultUsersCountAsList: number[] = []
  constructor(private profileService: ProfileService) {
    this.manageUserSearchAction()
    this.deafultUsersCountAsList = range(1, CONSTANTS.DEFAULT_USERS_TO_LOAD)
    console.log(this.deafultUsersCountAsList);
  }

  ngOnInit(): void {
    this.getDefaultUsers();
  }

  manageUserSearchAction() {
    this.searchInput.valueChanges.subscribe((inputValue) => {
      if (inputValue) {
        this.filterUsers();
      } else {
        this.usersList.next([]);
        this.getDefaultUsers();
      }
    });
  }

  getUserInformation() {
    this.profileService.getUserInfo().subscribe((resp) => {
        if (resp) {
          this.findAndUpdateUsersList(resp);
        }
    })
  }

  filterUsers() {
    let filteredUsers = this.usersList.getValue().filter((user) => {
      let username = `${user.name.first} ${user.name.last}`.toLocaleUpperCase();
      let searchInput = this.searchInput.value.toString().toLocaleUpperCase();
      return username.startsWith(searchInput);
    })
    this.usersList.next(filteredUsers);
  }

  getDefaultUsers() {
    from(this.deafultUsersCountAsList)
    .pipe(mergeMap((id: number) => this.profileService.getUserInfo()))
    .subscribe(
      userInfo => {
        this.findAndUpdateUsersList(userInfo);
      },
      err => console.log("Error while fetching user information", err),
      () => console.log("Completed all the users fetch")
    );
  }

  findAndUpdateUsersList(usersResponse: UserResponseModel) {
    let dupUserFound = this.usersList.getValue().find((user) => user.login.uuid === usersResponse.results[0].login.uuid)
    if (dupUserFound === undefined) {
      let currentUsersList = this.usersList.getValue();
      currentUsersList.push(usersResponse.results[0])
      this.usersList.next(currentUsersList);
    }
  }

}

