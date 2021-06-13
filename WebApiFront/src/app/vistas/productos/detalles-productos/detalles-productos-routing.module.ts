import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesProductosComponent } from './detalles-productos.component';

const routes: Routes = [{ path: '', component: DetallesProductosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesProductosRoutingModule { }
