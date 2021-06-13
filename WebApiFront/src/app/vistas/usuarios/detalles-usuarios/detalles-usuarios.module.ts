import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesUsuariosRoutingModule } from './detalles-usuarios-routing.module';
import { DetallesUsuariosComponent } from './detalles-usuarios.component';


@NgModule({
  declarations: [DetallesUsuariosComponent],
  imports: [
    CommonModule,
    DetallesUsuariosRoutingModule
  ]
})
export class DetallesUsuariosModule { }
