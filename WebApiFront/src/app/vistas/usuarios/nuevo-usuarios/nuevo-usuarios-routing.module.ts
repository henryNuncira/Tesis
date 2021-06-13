import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoUsuariosComponent } from './nuevo-usuarios.component';

const routes: Routes = [{ path: '', component: NuevoUsuariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoUsuariosRoutingModule { }
