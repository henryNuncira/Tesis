import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriasComponent } from './editar-categorias.component';

const routes: Routes = [{ path: '', component: EditarCategoriasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarCategoriasRoutingModule { }
