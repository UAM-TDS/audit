import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../tab3.page';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.page.html',
  styleUrls: ['./edit-company.page.scss'],
})
export class EditCompanyPage implements OnInit {

  public companys: Company[] = [
    {name: 'Security Company', email: 'security@company.com', phone: '12129948', title: 'Work with security'},
    {name: 'Food Company', email: 'food@company.com', phone: '12129948', title: 'We love all this FOOD'},
    {name: 'College', email: 'college@study.com', phone: '12129948', title: 'Faculdade YouTube'}
  ];

  
  public company: Company;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.company = this.companys.find(co => co.name === name);
  }

  public handleSave() {
    console.log(this.company, "Editing Company!");
  }

}
