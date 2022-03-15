import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCitasVetComponent } from './ver-citas-vet.component';

describe('VerCitasVetComponent', () => {
  let component: VerCitasVetComponent;
  let fixture: ComponentFixture<VerCitasVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCitasVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCitasVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
