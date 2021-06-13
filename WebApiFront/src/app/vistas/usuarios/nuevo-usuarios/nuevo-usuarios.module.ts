import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoUsuariosRoutingModule } from './nuevo-usuarios-routing.module';
import { NuevoUsuariosComponent } from './nuevo-usuarios.component';
import { UsuarioFormModule } from 'src/app/shared/components/formularios/usuario-form/usuario-form.module';


@NgModule({
  declarations: [NuevoUsuariosComponent],
  imports: [
    CommonModule,
    NuevoUsuariosRoutingModule,
    UsuarioFormModule
  ]
})
export class NuevoUsuariosModule { }
