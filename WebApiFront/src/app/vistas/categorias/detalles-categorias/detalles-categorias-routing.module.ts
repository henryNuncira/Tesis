import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesCategoriasComponent } from './detalles-categorias.component';

const routes: Routes = [{ path: '', component: DetallesCategoriasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesCategoriasRoutingModule { }
