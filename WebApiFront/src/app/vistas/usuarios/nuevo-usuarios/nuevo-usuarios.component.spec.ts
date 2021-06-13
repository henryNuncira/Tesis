import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUsuariosComponent } from './nuevo-usuarios.component';

describe('NuevoUsuariosComponent', () => {
  let component: NuevoUsuariosComponent;
  let fixture: ComponentFixture<NuevoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
