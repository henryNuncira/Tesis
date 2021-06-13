import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoVendedoresComponent } from './nuevo-vendedores.component';

const routes: Routes = [{ path: '', component: NuevoVendedoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoVendedoresRoutingModule { }
