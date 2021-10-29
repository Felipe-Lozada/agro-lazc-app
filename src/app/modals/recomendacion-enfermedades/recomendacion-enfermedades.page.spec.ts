import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecomendacionEnfermedadesPage } from './recomendacion-enfermedades.page';

describe('RecomendacionEnfermedadesPage', () => {
  let component: RecomendacionEnfermedadesPage;
  let fixture: ComponentFixture<RecomendacionEnfermedadesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendacionEnfermedadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecomendacionEnfermedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
