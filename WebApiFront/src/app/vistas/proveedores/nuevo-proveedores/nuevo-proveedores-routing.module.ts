import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoProveedoresComponent } from './nuevo-proveedores.component';

const routes: Routes = [{ path: '', component: NuevoProveedoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoProveedoresRoutingModule { }
