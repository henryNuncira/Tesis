import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarProductosRoutingModule } from './editar-productos-routing.module';
import { EditarProductosComponent } from './editar-productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosFormModule } from 'src/app/shared/components/formularios/productos-form/productos-form.module';


@NgModule({
  declarations: [EditarProductosComponent],
  imports: [
    CommonModule,
    EditarProductosRoutingModule,
    ReactiveFormsModule,
    ProductosFormModule
  ]
})
export class EditarProductosModule { }
