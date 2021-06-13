import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVendedoresComponent } from './nuevo-vendedores.component';

describe('NuevoVendedoresComponent', () => {
  let component: NuevoVendedoresComponent;
  let fixture: ComponentFixture<NuevoVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoVendedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
