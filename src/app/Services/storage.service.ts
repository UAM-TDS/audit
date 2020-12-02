import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

interface User {
  name: string;
  id: number;

}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private users: User[] = [];

  constructor(private router: Router, private storage: Storage) {
    this.storage.get('users').then( g => this.users.push(...g));
  }

public all() {
  return this.users;
}

public create( user: User ) {
  const maxId = Math.max(...this.users.map(u => u.id));
  this.users.push({ ...user, id: maxId + 1});
  this.storage.set('users', this.users);
}
}
