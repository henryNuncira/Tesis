import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoClientesRoutingModule } from './nuevo-clientes-routing.module';
import { NuevoClientesComponent} from './nuevo-clientes.component';
import { ClientesFormModule } from 'src/app/shared/components/formularios/clientes-form/clientes-form.module';


@NgModule({
  declarations: [NuevoClientesComponent],
  imports: [
    CommonModule,
    NuevoClientesRoutingModule,
    ClientesFormModule

  ]
})
export class NuevoClientesModule { }
