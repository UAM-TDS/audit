import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Company {
  name: string,
  email: string, 
  phone: string
};

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {

  @Input() company: Company;
  @Output() formSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
