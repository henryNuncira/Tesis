import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarProveedoresRoutingModule } from './editar-proveedores-routing.module';
import { EditarProveedoresComponent } from './editar-proveedores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProveedorFormModule } from 'src/app/shared/components/formularios/proveedor-form/proveedor-form.module';


@NgModule({
  declarations: [EditarProveedoresComponent],
  imports: [
    CommonModule,
    EditarProveedoresRoutingModule,
    ReactiveFormsModule,
    ProveedorFormModule
  ]
})
export class EditarProveedoresModule { }
