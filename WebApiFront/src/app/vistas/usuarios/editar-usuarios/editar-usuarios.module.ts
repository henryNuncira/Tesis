import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarUsuariosRoutingModule } from './editar-usuarios-routing.module';
import { EditarUsuariosComponent } from './editar-usuarios.component';
import { UsuarioFormModule } from 'src/app/shared/components/formularios/usuario-form/usuario-form.module';


@NgModule({
  declarations: [EditarUsuariosComponent],
  imports: [
    CommonModule,
    EditarUsuariosRoutingModule,
    UsuarioFormModule
  ]
})
export class EditarUsuariosModule { }
