import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VendedoresFormComponent } from './vendedores-form.component';



@NgModule({
  declarations: [VendedoresFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [VendedoresFormComponent]

})
export class VendedoresFormModule { }
