import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesVendedoresRoutingModule } from './detalles-vendedores-routing.module';
import { DetallesVendedoresComponent } from './detalles-vendedores.component';


@NgModule({
  declarations: [DetallesVendedoresComponent],
  imports: [
    CommonModule,
    DetallesVendedoresRoutingModule
  ]
})
export class DetallesVendedoresModule { }
