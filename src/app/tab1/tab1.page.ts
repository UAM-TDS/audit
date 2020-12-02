import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { HavingsdetailComponent } from './Havings/havingsdetail/havingsdetail.component';


export interface Having {
  
  id: string;
  cat: string;
  type: string;
  quanti: string;
  medida: string;
  price: string;
  departament: string;
  location: string;
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
items: any;

  constructor(private modalController: ModalController) {
    this.inicializateItems();
   }

  public havings: Having[] = [
    {id: '01', cat:'dispositivos', type: 'computador', quanti: '40', medida: 'unidades', price: 'R$1,200.00', departament: 'T.I.', location: 'Predio Sede - (Av. das pitangas, 123)'},
    {id: '02', cat:'insumo', type: 'caneta', quanti: '100', medida: 'caixas', price: 'R$800.00', departament: 'almocharifado', location: 'Predio Sede - (Av. das pitangas, 123)'},
    {id: '03', cat:'moveis', type: 'cadeira', quanti: '8', medida: 'unidades', price: 'R$4,600.00', departament: 'almocharifado', location: 'Predio Sede - (Av. das pitangas, 123)'},
    {id: '04', cat:'automoveis', type: 'moto', quanti: '2', medida: 'unudades', price: 'R$8,500.00', departament: 'espedicao', location: 'Predio Sede - (Av. das pitangas, 123)'},
  ];

  public async openModal(having: Having){
    console.log(having);
    const modal = await this.modalController.create({
      component: HavingsdetailComponent,
      componentProps: {
        having: having,
      }
    });
    modal.present();
  }

  inicializateItems(){
    this.items = this.havings;
  }

  getItems( ev: any ) {
    this.inicializateItems();
    let val = ev.target.value;
    if (val && val.trim() != ''){
      this.items = this.items.filter((item) => {
        return (item.type.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

