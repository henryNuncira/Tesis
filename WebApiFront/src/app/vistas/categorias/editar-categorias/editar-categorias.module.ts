import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarCategoriasRoutingModule } from './editar-categorias-routing.module';
import { EditarCategoriasComponent } from './editar-categorias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasFormModule } from 'src/app/shared/components/formularios/categorias-form/categorias-form.module';


@NgModule({
  declarations: [EditarCategoriasComponent],
  imports: [
    CommonModule,
    EditarCategoriasRoutingModule,
    ReactiveFormsModule,
    CategoriasFormModule
  ]
})
export class EditarCategoriasModule { }
