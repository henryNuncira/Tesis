import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVendedoresComponent } from './listado-vendedores.component';

const routes: Routes = [{ path: '', component: ListadoVendedoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoVendedoresRoutingModule { }
