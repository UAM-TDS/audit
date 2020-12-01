import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Having } from 'src/app/tab1/tab1.page';

@Component({
  selector: 'app-havings-form',
  templateUrl: './havings-form.component.html',
  styleUrls: ['./havings-form.component.scss'],
})
export class HavingsFormComponent implements OnInit {

  @Input() having: Having;
  @Output() save = new EventEmitter();
  constructor() { }

  ngOnInit() {}

}
