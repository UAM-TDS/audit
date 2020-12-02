import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { StorageService } from '../Services/storage.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string;
  email: string;
  password: string;

  constructor(private router: Router, private service: StorageService) { }
  ngOnInit() {
  }

 

  register() {
    const user = { email: this.email, name : this.name, password: this.password};
    this.service.create(user);
    this.router.navigateByUrl('tab2');
  }



}