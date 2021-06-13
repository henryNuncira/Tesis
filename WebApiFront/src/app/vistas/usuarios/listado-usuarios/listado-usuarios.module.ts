import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoUsuariosRoutingModule } from './listado-usuarios-routing.module';
import { ListadoUsuariosComponent } from './listado-usuarios.component';


@NgModule({
  declarations: [ListadoUsuariosComponent],
  imports: [
    CommonModule,
    ListadoUsuariosRoutingModule
  ]
})
export class ListadoUsuariosModule { }
