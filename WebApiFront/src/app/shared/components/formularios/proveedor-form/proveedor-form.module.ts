import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProveedorFormComponent } from './proveedor-form.component';



@NgModule({
  declarations: [ProveedorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [ProveedorFormComponent]

})
export class ProveedorFormModule { }
