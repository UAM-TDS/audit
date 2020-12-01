import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Having } from '../../tab1.page';

@Component({
  selector: 'app-havingsdetail',
  templateUrl: './havingsdetail.component.html',
  styleUrls: ['./havingsdetail.component.scss'],
})
export class HavingsdetailComponent {

  @Input() having: Having;

  constructor(private modalController: ModalController) { }


  closeModal() {
    this.modalController.dismiss();
  }

}
