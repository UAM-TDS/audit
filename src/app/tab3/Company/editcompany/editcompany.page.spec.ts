import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditcompanyPage } from './editcompany.page';

describe('EditcompanyPage', () => {
  let component: EditcompanyPage;
  let fixture: ComponentFixture<EditcompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditcompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
