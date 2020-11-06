import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/tab3/tab3.page';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

 @Input() contact: Contact;
 @Output() save = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  
}
