import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../tab3.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public contacts: Contact[] = [
    {name: 'Eduardo', email: 'edu@hotmail.com', phone: '11 234567890', role: 'Auditor', level: 'Level 3', username: 'orealdudao'},
    {name: 'Matheus', email: 'mat@hotmail.com', phone: '11 223344556', role: 'Auditor', level: 'Level 2', username: 'mathf'}
  ];

  public contact: Contact;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.contact = this.contacts.find(c => c.username === username);
  }

  public handleSave() {
    console.log(this.contact, "Editing Contact!");
  }

}
