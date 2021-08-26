import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponseModel } from "../models/user-response.model"

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<UserResponseModel> {
    // make api call to get the user details
    return this.http.get(environment.baseApiUrl) as Observable<UserResponseModel>
  }
}
