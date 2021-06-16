import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { vendedoresI } from 'src/app/shared/models/vendedores.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendedores-form',
  templateUrl: './vendedores-form.component.html',
  styleUrls: ['./vendedores-form.component.css']
})
export class VendedoresFormComponent implements OnInit {
  bandera : number =0;

  vendedor:vendedoresI;

  vendedorForm !: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;
  estado !: number;


    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      const navigation= this.router.getCurrentNavigation();
      this.vendedor = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.vendedor == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoVendedores']);
          }else{
            this.vendedorForm.patchValue(this.vendedor);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarVendedor() : void{
{// si el proveedor no existe creelo

      console.log('Saved', this.vendedorForm);
      console.log(this.vendedorForm.value);
    // if( this.proveedorForm.valid){
if( this.bandera==1){
        this.api.PostNewVendedores(this.vendedorForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;

            if (this.estado == 200) {
              Swal.fire({

                title: 'Vendedor creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoVendedores']);
            } else {
              Swal.fire({

                title: 'Vendedor no se ha creado correctamente',
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
    this.vendedorForm.reset();
}

        }

        toChange(): void{
      //this.ProveedorBorrar=7;

      this.api.PutModifyVendedor(this.vendedor.idVendedor,this.vendedorForm.value).subscribe(
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
      this.router.navigate(['listadoVendedores']);
    }
    toList() :void{
      this.router.navigate(['listadoVendedores']);
    }

    private initForm(): void {
      this.vendedorForm = this.fb.group({
        idVendedor: ['',[Validators.required]],
        nit:['',[Validators.required]],
        nombreCompleto:['',[Validators.required]],
        telefono:['',[Validators.required]],
        correoElectronico :['',[Validators.required, Validators.pattern(this.isEmail)]],
        direccion :['',[Validators.required]],

      });
    }
    isValidField(campo:string): boolean{
      const fieldName = this.vendedorForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }
