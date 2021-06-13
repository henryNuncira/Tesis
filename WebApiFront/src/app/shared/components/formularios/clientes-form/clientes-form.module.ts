import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesformComponent } from './clientesform.component';



@NgModule({
  declarations: [ClientesformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [ClientesformComponent]

})
export class ClientesFormModule { }
