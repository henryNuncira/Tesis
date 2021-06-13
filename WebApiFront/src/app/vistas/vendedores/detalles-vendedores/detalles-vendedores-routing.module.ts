import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesVendedoresComponent } from './detalles-vendedores.component';

const routes: Routes = [{ path: '', component: DetallesVendedoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesVendedoresRoutingModule { }
