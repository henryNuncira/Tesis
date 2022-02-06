import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoVentaRoutingModule } from './nuevo-venta-routing.module';
import { NuevoVentaComponent } from './nuevo-venta.component';
import { VentaFormModule } from 'src/app/shared/components/formularios/venta-form/venta-form.module';


@NgModule({
  declarations: [NuevoVentaComponent],
  imports: [
    CommonModule,
    VentaFormModule,
    NuevoVentaRoutingModule
  ]
})
export class NuevoVentaModule { }

