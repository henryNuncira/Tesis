import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesUsuariosComponent } from './detalles-usuarios.component';

const routes: Routes = [{ path: '', component: DetallesUsuariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesUsuariosRoutingModule { }
