import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RastreamentoPage } from './rastreamento.page';

describe('RastreamentoPage', () => {
  let component: RastreamentoPage;
  let fixture: ComponentFixture<RastreamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RastreamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
