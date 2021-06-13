import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesClientesComponent } from './detalles-clientes.component';

describe('DetallesClientesComponent', () => {
  let component: DetallesClientesComponent;
  let fixture: ComponentFixture<DetallesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
