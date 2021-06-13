import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesClientesComponent } from './detalles-clientes.component';

const routes: Routes = [{ path: '', component: DetallesClientesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesClientesRoutingModule { }
