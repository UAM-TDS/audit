import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Company } from '../shared/company-form/company-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export interface Contact {
  name: string;
  email: string;
  phone: string;
  role: string;
  level: string;
  username: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalController: ModalController) {
  }

  public company: Company[] = [
    {name: 'Security Company', email: 'security@company.com', phone: '12129948'},
    {name: 'Food Company', email: 'food@company.com', phone: '12129948'},
    {name: 'College', email: 'college@study.com', phone: '12129948'}
  ];

  public contacts: Contact[] = [
    {name: 'Eduardo', email: 'edu@hotmail.com', phone: '11 234567890', role: 'Auditor', level: 'Level 3', username: 'orealdudao'},
    {name: 'Matheus', email: 'mat@hotmail.com', phone: '11 223344556', role: 'Auditor', level: 'Level 2', username: 'mathf'}
  ];

  public async showModal(contact: Contact){
    console.log(contact);
    const modal = await this.modalController.create({
      component: UserDetailsComponent,
      componentProps: {
        contact: contact
      }
    });
    modal.present();
  }
}
