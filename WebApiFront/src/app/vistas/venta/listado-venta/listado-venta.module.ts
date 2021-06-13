import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoVentaRoutingModule } from './listado-venta-routing.module';
import { ListadoVentaComponent } from './listado-venta.component';


@NgModule({
  declarations: [ListadoVentaComponent],
  imports: [
    CommonModule,
    ListadoVentaRoutingModule
  ]
})
export class ListadoVentaModule { }
