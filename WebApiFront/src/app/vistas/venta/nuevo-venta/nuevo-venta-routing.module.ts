import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoVentaComponent } from './nuevo-venta.component';

const routes: Routes = [{ path: '', component: NuevoVentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoVentaRoutingModule { }
