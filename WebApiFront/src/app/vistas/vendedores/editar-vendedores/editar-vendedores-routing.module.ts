import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarVendedoresComponent } from './editar-vendedores.component';

const routes: Routes = [{ path: '', component: EditarVendedoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarVendedoresRoutingModule { }
