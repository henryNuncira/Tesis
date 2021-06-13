import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarVentaRoutingModule } from './editar-venta-routing.module';
import { EditarVentaComponent } from './editar-venta.component';


@NgModule({
  declarations: [EditarVentaComponent],
  imports: [
    CommonModule,
    EditarVentaRoutingModule
  ]
})
export class EditarVentaModule { }
