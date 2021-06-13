import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoVendedoresRoutingModule } from './listado-vendedores-routing.module';
import { ListadoVendedoresComponent } from './listado-vendedores.component';


@NgModule({
  declarations: [ListadoVendedoresComponent],
  imports: [
    CommonModule,
    ListadoVendedoresRoutingModule
  ]
})
export class ListadoVendedoresModule { }
