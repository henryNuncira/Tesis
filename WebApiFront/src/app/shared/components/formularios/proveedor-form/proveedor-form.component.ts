import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { proveedoresI } from 'src/app/shared/models/proveedoresI.inteface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent implements OnInit {

  bandera : number =0;
  ProveedorBorrar !: number;
  proveedor:proveedoresI;
  estado !: number;
  message !: string;
  proveedorForm !: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;


    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      const navigation= this.router.getCurrentNavigation();
      this.proveedor = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.proveedor == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoProveedores']);
          }else{
            this.proveedorForm.patchValue(this.proveedor);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardar() : void{
{// si el proveedor no existe creelo

      console.log('Saved', this.proveedorForm);
      console.log(this.proveedorForm.value);
    // if( this.proveedorForm.valid){
if( this.bandera==1){
        this.api.PostNewProveedor(this.proveedorForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;

            if (this.estado == 200) {
              Swal.fire({

                title: 'Proveedor creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoProveedores']);
            } else {
              Swal.fire({

                title: 'Proveedor no se ha creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })

            }

          }
        );
      //}
        } else this.toChange();
    this.proveedorForm.reset();
}

        }

        toChange(): void{
      //this.ProveedorBorrar=7;

      this.api.PutModifyProveedor(this.proveedor.idProveedor,this.proveedorForm.value).subscribe(
        resp=>{

          // this.estado= resp.state;
          // this.message= resp.message;

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu trabajo ha sido guardado',
            showConfirmButton: false,
            timer: 1500
          })


      },error => console.error(error));
      this.router.navigate(['listadoProveedores']);
    }
    toList() :void{
      this.router.navigate(['listadoProveedores']);
    }

    private initForm(): void {
      this.proveedorForm = this.fb.group({
        idProveedor: ['',[Validators.required]],
        nitProveedor:['',[Validators.required]],
        nombreCompleto:['',[Validators.required]],
        telefono:['',[Validators.required]],
        direccion:['',[Validators.required, Validators.pattern(this.isEmail)]],
        correoElectronico:['',[Validators.required]],

      });
    }
    isValidField(campo:string): boolean{
      const fieldName = this.proveedorForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }

