import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoVentaRoutingModule } from './nuevo-venta-routing.module';
import { NuevoVentaComponent } from './nuevo-venta.component';


@NgModule({
  declarations: [NuevoVentaComponent],
  imports: [
    CommonModule,
    NuevoVentaRoutingModule
  ]
})
export class NuevoVentaModule { }
