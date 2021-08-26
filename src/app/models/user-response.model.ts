import { UserProfileModel } from "./user-profile.model"

export interface UserResponseModel {
    results: UserProfileModel[];
    info: InfoModel;
}

export interface InfoModel {
    seed: string;
    results: number;
    page: number;
    version: string;   
}