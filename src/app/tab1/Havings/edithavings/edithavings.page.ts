import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Having } from '../../tab1.page';

@Component({
  selector: 'app-edithavings',
  templateUrl: './edithavings.page.html',
  styleUrls: ['./edithavings.page.scss'],
})
export class EdithavingsPage implements OnInit {

  public havings: Having[] = [
    {id: '01', cat:'dispositivos', type: 'computador', quanti: '40', medida: 'unidades', price: 'R$1,200.00', departament: 'T.I.', location: 'Predio Sede - (Av. das pitangas, 123)'},
    {id: '02', cat:'insumo', type: 'caneta', quanti: '100', medida: 'caixas', price: 'R$800.00', departament: 'almocharifado', location: 'Predio Sede - (Av. das pitangas, 123)'},
    {id: '03', cat:'moveis', type: 'cadeira', quanti: '8', medida: 'unidades', price: 'R$4,600.00', departament: 'almocharifado', location: 'Predio Sede - (Av. das pitangas, 123)'},
    {id: '04', cat:'automoveis', type: 'moto', quanti: '2', medida: 'unudades', price: 'R$8,500.00', departament: 'espedicao', location: 'Predio Sede - (Av. das pitangas, 123)'},
   ];

  public having: Having;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.having = this.havings.find(h => h.id === id);
  }
  
  public handleSave() {
    console.log(this.having, "Editing Havings!");
  }
}
