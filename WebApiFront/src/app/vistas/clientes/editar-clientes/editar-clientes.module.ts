import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarClientesRoutingModule } from './editar-clientes-routing.module';
import {  EditarClientesComponent} from './editar-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesFormModule } from 'src/app/shared/components/formularios/clientes-form/clientes-form.module';


@NgModule({
  declarations: [EditarClientesComponent],
  imports: [
    CommonModule,
    EditarClientesRoutingModule,
    ReactiveFormsModule,
    ClientesFormModule
  ]
})
export class EditarClientesModule { }
