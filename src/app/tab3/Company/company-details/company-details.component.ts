import { Component, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Company } from '../../tab3.page';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent {

 
  @Input() company: Company;

  constructor(private modalController: ModalController) {}

  closeModal(){
  this.modalController.dismiss();
  }
}
