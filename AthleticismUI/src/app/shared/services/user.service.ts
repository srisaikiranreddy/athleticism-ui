import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as moment from "moment";
import { CreateUser } from "../Models/create-user";

@Injectable()
export class UserService {
  selectedUser: CreateUser = new CreateUser();
  users: AngularFireList<CreateUser>;

  location = {
    lat: null,
    lon: null
  };

  constructor(private db: AngularFireDatabase) {
    this.getUsers();
  }

  getUsers() {
    this.users = this.db.list("clients");
    return this.users;
  }

  createUser(data: any) {
    data.location = this.location;
    data.createdOn = moment(new Date()).format("X");
    data.isAdmin = false;
    this.users.push(data);
  }

  isAdmin(emailId: string) {
    return this.db.list("clients", ref =>
      ref.orderByChild("email").equalTo(emailId)
    );
  }

  updateUser(user: CreateUser) {
    this.users.update(user.$key, user);
  }

  setLocation(lat, lon) {
    this.location.lat = lat;
    this.location.lon = lon;
  }
}