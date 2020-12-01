import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../../tab3.page';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.page.html',
  styleUrls: ['./editcompany.page.scss'],
})
export class EditcompanyPage implements OnInit {

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

  public handleSend() {
    console.log(this.company, "Editing Company!");
  }
}
