import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.page.html',
  styleUrls: ['./createcompany.page.scss'],
})
export class CreatecompanyPage implements OnInit {

  public newCompany = {
    name: '',
    email: '', 
    phone: '',
    title: ''
  };

  constructor() { }

  ngOnInit() {
  }

 public handleSend() {
    console.log(this.newCompany, 'Saving New Company!');
  }
}
