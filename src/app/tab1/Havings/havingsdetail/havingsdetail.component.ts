import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Having } from '../../tab1.page';

@Component({
  selector: 'app-havingsdetail',
  templateUrl: './havingsdetail.component.html',
  styleUrls: ['./havingsdetail.component.scss'],
})
export class HavingsdetailComponent implements OnInit {

  @Input() having: Having;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.modalController.dismiss();
  }

}
