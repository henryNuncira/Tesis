import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoCategoriasComponent } from './nuevo-categorias.component';

const routes: Routes = [{ path: '', component: NuevoCategoriasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoCategoriasRoutingModule { }
