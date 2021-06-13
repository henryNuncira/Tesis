import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoClientesComponent } from './nuevo-clientes.component';

const routes: Routes = [{ path: '', component: NuevoClientesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoClientesRoutingModule { }
