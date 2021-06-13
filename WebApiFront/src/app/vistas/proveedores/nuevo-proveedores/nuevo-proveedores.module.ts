import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoProveedoresRoutingModule } from './nuevo-proveedores-routing.module';
import { NuevoProveedoresComponent } from './nuevo-proveedores.component';
import { ProveedorFormModule } from 'src/app/shared/components/formularios/proveedor-form/proveedor-form.module';


@NgModule({
  declarations: [NuevoProveedoresComponent],
  imports: [
    CommonModule,
    NuevoProveedoresRoutingModule,
    ProveedorFormModule
  ]
})
export class NuevoProveedoresModule { }
