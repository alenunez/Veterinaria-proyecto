import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCitasClienteComponent } from './ver-citas-cliente.component';

describe('VerCitasClienteComponent', () => {
  let component: VerCitasClienteComponent;
  let fixture: ComponentFixture<VerCitasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCitasClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCitasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
