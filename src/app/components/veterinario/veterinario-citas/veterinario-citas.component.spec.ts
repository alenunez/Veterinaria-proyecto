import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarioCitasComponent } from './veterinario-citas.component';

describe('VeterinarioCitasComponent', () => {
  let component: VeterinarioCitasComponent;
  let fixture: ComponentFixture<VeterinarioCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarioCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarioCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
