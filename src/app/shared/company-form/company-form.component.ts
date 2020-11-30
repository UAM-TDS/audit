import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/tab3/tab3.page';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {

  @Input() company: Company;
  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
