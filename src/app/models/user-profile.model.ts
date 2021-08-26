export interface UserProfileModel {
    gender: string;
    name: NameModel;
    location: LocationModel;
    email: string;
    login: LoginModel;
    dob: DobModel;
    registered: DobModel;
    phone: string;
    cell: string;
    id: IdModel;
    picture: PictureModel;
    nat: string;
}

export interface NameModel {
    title: string;
    first: string;
    last: string;
}

export interface LocationModel {
    street: StreetModel;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: CoordinatesModel
}

export interface StreetModel {
    number: number;
    name: string;
}

export interface CoordinatesModel {
    latitude: string;
    longitude: string;
}

export interface TimeZoneModel {
    offset: string;
    description: string;
}

export interface LoginModel {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface DobModel {
    date: Date;
    age: number;
}

export interface IdModel {
    name: string;
    value: string;
}

export interface PictureModel {
    large: string;
    medium: string;
    thumbnail: string;
}
