import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoProductosComponent } from './nuevo-productos.component';

const routes: Routes = [{ path: '', component: NuevoProductosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoProductosRoutingModule { }
