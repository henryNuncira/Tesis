import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesProductosRoutingModule } from './detalles-productos-routing.module';
import { DetallesProductosComponent } from './detalles-productos.component';


@NgModule({
  declarations: [DetallesProductosComponent],
  imports: [
    CommonModule,
    DetallesProductosRoutingModule
  ]
})
export class DetallesProductosModule { }
