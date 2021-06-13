import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoVendedoresRoutingModule } from './nuevo-vendedores-routing.module';
import { NuevoVendedoresComponent } from './nuevo-vendedores.component';
import { VendedoresFormModule } from 'src/app/shared/components/formularios/vendedores-form/vendedores-form.module';


@NgModule({
  declarations: [NuevoVendedoresComponent],
  imports: [
    CommonModule,
    NuevoVendedoresRoutingModule,
    VendedoresFormModule
  ]
})
export class NuevoVendedoresModule { }
