import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesProveedoresRoutingModule } from './detalles-proveedores-routing.module';
import { DetallesProveedoresComponent } from './detalles-proveedores.component';


@NgModule({
  declarations: [DetallesProveedoresComponent],
  imports: [
    CommonModule,
    DetallesProveedoresRoutingModule
  ]
})
export class DetallesProveedoresModule { }
