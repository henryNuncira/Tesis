import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioFormComponent } from './usuario-form.component';



@NgModule({
  declarations: [
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [UsuarioFormComponent]

})
export class UsuarioFormModule { }
