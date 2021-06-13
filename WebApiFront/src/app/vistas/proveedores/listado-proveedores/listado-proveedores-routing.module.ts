import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProveedoresComponent } from './listado-proveedores.component';

const routes: Routes = [{ path: '', component: ListadoProveedoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoProveedoresRoutingModule { }
