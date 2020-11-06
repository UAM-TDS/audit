import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  public havings = [
    {id: '01', a_category:'dispositivos', a_type: 'computador', company: 'Security Company', location: 'Predio Sede - (Av. das pitangas, 123'}
  ];
}
