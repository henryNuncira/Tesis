import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesClientesRoutingModule } from './detalles-clientes-routing.module';
import { DetallesClientesComponent } from './detalles-clientes.component';


@NgModule({
  declarations: [DetallesClientesComponent],
  imports: [
    CommonModule,
    DetallesClientesRoutingModule
  ]
})
export class DetallesClientesModule { }
