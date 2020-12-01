import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createhavings',
  templateUrl: './createhavings.page.html',
  styleUrls: ['./createhavings.page.scss'],
})
export class CreatehavingsPage implements OnInit {

  public emptyHaving =  {
    id: '',
    cat: '',
    type: '',
    quanti: '',
    medida: '',
    price: '',
    departament: '',
    location: ''
  }
  constructor() { }

  ngOnInit() {
  }

  handleSave() {
    console.log(this.emptyHaving, 'Saving New Having!');
  }

}
