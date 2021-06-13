import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoCategoriasRoutingModule } from './nuevo-categorias-routing.module';
import { NuevoCategoriasComponent } from './nuevo-categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasFormModule } from 'src/app/shared/components/formularios/categorias-form/categorias-form.module';


@NgModule({
  declarations: [NuevoCategoriasComponent],
  imports: [
    CommonModule,
    NuevoCategoriasRoutingModule,
    ReactiveFormsModule,
    CategoriasFormModule
  ]
})
export class NuevoCategoriasModule { }
