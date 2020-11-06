import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HavingsFormComponent } from './havings-form.component';

describe('HavingsFormComponent', () => {
  let component: HavingsFormComponent;
  let fixture: ComponentFixture<HavingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HavingsFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HavingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
