import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarVendedoresRoutingModule } from './editar-vendedores-routing.module';
import { EditarVendedoresComponent } from './editar-vendedores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VendedoresFormModule } from 'src/app/shared/components/formularios/vendedores-form/vendedores-form.module';


@NgModule({
  declarations: [EditarVendedoresComponent],
  imports: [
    CommonModule,
    EditarVendedoresRoutingModule,
    ReactiveFormsModule,
    VendedoresFormModule
  ]
})
export class EditarVendedoresModule { }
