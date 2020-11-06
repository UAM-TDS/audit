import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/company-form/company-form.component';

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.page.html',
  styleUrls: ['./createcompany.page.scss'],
})
export class CreatecompanyPage implements OnInit {

  public newCompany: Company = {
    name: '',
    email: '', 
    phone: ''
  };

  constructor() { }

  ngOnInit() {
  }

 public handleFormSubmitted() {
    console.log(this.newCompany, 'Salvo!');
  }
}
