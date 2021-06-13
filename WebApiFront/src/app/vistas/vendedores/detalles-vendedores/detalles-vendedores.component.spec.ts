import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVendedoresComponent } from './detalles-vendedores.component';

describe('DetallesVendedoresComponent', () => {
  let component: DetallesVendedoresComponent;
  let fixture: ComponentFixture<DetallesVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesVendedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
