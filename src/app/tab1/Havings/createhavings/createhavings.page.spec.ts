import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatehavingsPage } from './createhavings.page';

describe('CreatehavingsPage', () => {
  let component: CreatehavingsPage;
  let fixture: ComponentFixture<CreatehavingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatehavingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatehavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
