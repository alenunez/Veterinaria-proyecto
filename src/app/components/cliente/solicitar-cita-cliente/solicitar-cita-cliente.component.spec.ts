import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCitaClienteComponent } from './solicitar-cita-cliente.component';

describe('SolicitarCitaClienteComponent', () => {
  let component: SolicitarCitaClienteComponent;
  let fixture: ComponentFixture<SolicitarCitaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarCitaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarCitaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
