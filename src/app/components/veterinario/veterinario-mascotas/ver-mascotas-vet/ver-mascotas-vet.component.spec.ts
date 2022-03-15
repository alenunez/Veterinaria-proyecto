import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMascotasVetComponent } from './ver-mascotas-vet.component';

describe('VerMascotasVetComponent', () => {
  let component: VerMascotasVetComponent;
  let fixture: ComponentFixture<VerMascotasVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMascotasVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMascotasVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
