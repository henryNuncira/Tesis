import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVentaComponent } from './nuevo-venta.component';

describe('NuevoVentaComponent', () => {
  let component: NuevoVentaComponent;
  let fixture: ComponentFixture<NuevoVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
