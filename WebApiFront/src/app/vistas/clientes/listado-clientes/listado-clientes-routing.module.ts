import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesComponent } from './listado-clientes.component';

const routes: Routes = [{ path: '', component: ListadoClientesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoClientesRoutingModule { }
