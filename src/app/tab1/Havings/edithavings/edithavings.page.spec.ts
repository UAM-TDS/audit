import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdithavingsPage } from './edithavings.page';

describe('EdithavingsPage', () => {
  let component: EdithavingsPage;
  let fixture: ComponentFixture<EdithavingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdithavingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdithavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
