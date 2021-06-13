import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasFormComponent } from './categorias-form.component';



@NgModule({
  declarations: [CategoriasFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [CategoriasFormComponent]
})
export class CategoriasFormModule { }
