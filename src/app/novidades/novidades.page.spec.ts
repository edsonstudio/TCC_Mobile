import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovidadesPage } from './novidades.page';

describe('NovidadesPage', () => {
  let component: NovidadesPage;
  let fixture: ComponentFixture<NovidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
