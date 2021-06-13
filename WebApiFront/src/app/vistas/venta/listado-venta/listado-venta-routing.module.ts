import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVentaComponent } from './listado-venta.component';

const routes: Routes = [{ path: '', component: ListadoVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoVentaRoutingModule { }
