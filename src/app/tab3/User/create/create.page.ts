import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public emptyContact = {
    nome: '', 
    email: '', 
    phone: '', 
    role: '', 
    level: '', 
    username: ''
  };
    

  constructor() { }

  ngOnInit() {
  }

  handleSave() {
    console.log(this.emptyContact, 'Saving New Contact!');
  }

}
