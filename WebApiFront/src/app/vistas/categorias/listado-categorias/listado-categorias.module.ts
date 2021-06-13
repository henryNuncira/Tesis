import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoCategoriasRoutingModule } from './listado-categorias-routing.module';
import { ListadoCategoriasComponent } from './listado-categorias.component';


@NgModule({
  declarations: [ListadoCategoriasComponent],
  imports: [
    CommonModule,
    ListadoCategoriasRoutingModule
  ]
})
export class ListadoCategoriasModule { }
