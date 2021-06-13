import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoClientesRoutingModule } from './listado-clientes-routing.module';
import { ListadoClientesComponent } from './listado-clientes.component';


@NgModule({
  declarations: [ListadoClientesComponent],
  imports: [
    CommonModule,
    ListadoClientesRoutingModule
  ]
})
export class ListadoClientesModule { }
