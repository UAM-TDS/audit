import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private users = [];

  constructor(private router: Router, private storage: Storage) {
    this.storage.get('users').then( g => this.users.push(...g));
  }

public all() {
  return this.users;
}

public create( user: any ) {
  this.users.push({ ...user, User:user});
  this.storage.set('users', this.users);
}
}
