import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoProveedoresRoutingModule } from './listado-proveedores-routing.module';
import { ListadoProveedoresComponent } from './listado-proveedores.component';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';


@NgModule({
  declarations: [ListadoProveedoresComponent],
  imports: [
    CommonModule,
    ListadoProveedoresRoutingModule,
    DataTablesModule
  ]
})
export class ListadoProveedoresModule { }
