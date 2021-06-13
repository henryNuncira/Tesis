import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoProductosRoutingModule } from './listado-productos-routing.module';
import { ListadoProductosComponent } from './listado-productos.component';


@NgModule({
  declarations: [ListadoProductosComponent],
  imports: [
    CommonModule,
    ListadoProductosRoutingModule
  ]
})
export class ListadoProductosModule { }
