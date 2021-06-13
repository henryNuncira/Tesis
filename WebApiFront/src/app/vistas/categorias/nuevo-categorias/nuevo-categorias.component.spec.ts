import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCategoriasComponent } from './nuevo-categorias.component';

describe('NuevoCategoriasComponent', () => {
  let component: NuevoCategoriasComponent;
  let fixture: ComponentFixture<NuevoCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
