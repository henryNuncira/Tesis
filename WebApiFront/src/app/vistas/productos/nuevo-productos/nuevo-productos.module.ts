import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoProductosRoutingModule } from './nuevo-productos-routing.module';
import { NuevoProductosComponent } from './nuevo-productos.component';
import { ProductosFormModule } from 'src/app/shared/components/formularios/productos-form/productos-form.module';


@NgModule({
  declarations: [NuevoProductosComponent],
  imports: [
    CommonModule,
    NuevoProductosRoutingModule,
    ProductosFormModule
  ]
})
export class NuevoProductosModule { }
