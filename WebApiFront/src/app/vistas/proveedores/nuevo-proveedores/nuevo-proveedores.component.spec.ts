import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProveedoresComponent } from './nuevo-proveedores.component';

describe('NuevoProveedoresComponent', () => {
  let component: NuevoProveedoresComponent;
  let fixture: ComponentFixture<NuevoProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
