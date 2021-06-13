import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVendedoresComponent } from './editar-vendedores.component';

describe('EditarVendedoresComponent', () => {
  let component: EditarVendedoresComponent;
  let fixture: ComponentFixture<EditarVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVendedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
