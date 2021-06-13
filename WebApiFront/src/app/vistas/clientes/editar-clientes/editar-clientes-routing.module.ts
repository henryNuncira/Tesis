import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarClientesComponent } from './editar-clientes.component';

const routes: Routes = [{ path: '', component: EditarClientesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarClientesRoutingModule { }
