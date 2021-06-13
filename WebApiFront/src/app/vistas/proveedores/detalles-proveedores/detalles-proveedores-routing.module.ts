import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesProveedoresComponent } from './detalles-proveedores.component';

const routes: Routes = [{ path: '', component: DetallesProveedoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesProveedoresRoutingModule { }
