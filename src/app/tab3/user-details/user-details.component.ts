import { Component, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contact } from '../tab3.page';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {

  @Input() contact: Contact;

  constructor(private modalController: ModalController) {}

  closeModal(){
  this.modalController.dismiss();
  }
}
