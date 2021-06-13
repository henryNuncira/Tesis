import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesCategoriasRoutingModule } from './detalles-categorias-routing.module';
import { DetallesCategoriasComponent } from './detalles-categorias.component';


@NgModule({
  declarations: [DetallesCategoriasComponent],
  imports: [
    CommonModule,
    DetallesCategoriasRoutingModule
  ]
})
export class DetallesCategoriasModule { }
