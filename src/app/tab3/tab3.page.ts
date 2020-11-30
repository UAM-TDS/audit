import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { CompanyDetailsComponent } from './Company/company-details/company-details.component';

export interface Contact {
  name: string;
  email: string;
  phone: string;
  role: string;
  level: string;
  username: string;
}
export interface Company {
  name: string;
  email: string;
  phone: string;
  title: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalController: ModalController) {
  }

  public companys: Company[] = [
    {name: 'Security Company', email: 'security@company.com', phone: '12129948', title: 'Work with security'},
    {name: 'Food Company', email: 'food@company.com', phone: '12129948', title: 'We love all this FOOD'},
    {name: 'College', email: 'college@study.com', phone: '12129948', title: 'Faculdade YouTube'}
  ];

  public async openModal(company: Company){
    console.log(company);
    const modal = await this.modalController.create({
      component: CompanyDetailsComponent,
      componentProps: {
        company: company,
      }
    });
    modal.present();
  }

  public contacts: Contact[] = [
    {name: 'Eduardo', email: 'edu@hotmail.com', phone: '11 234567890', role: 'Auditor', level: 'Level 3', username: 'orealdudao'},
    {name: 'Matheus', email: 'mat@hotmail.com', phone: '11 223344556', role: 'Auditor', level: 'Level 2', username: 'mathf'}
  ];

  public async showModal(contact: Contact){
    console.log(contact);
    const modal = await this.modalController.create({
      component: UserDetailsComponent,
      componentProps: {
        contact: contact,
      }
    });
    modal.present();
  }
}
