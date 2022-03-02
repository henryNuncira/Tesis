import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { clientesI } from 'src/app/shared/models/clientes.interface';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientesform',
  templateUrl: './clientesform.component.html',

})
export class ClientesformComponent implements OnInit {


  bandera : number =0;
  ProveedorBorrar !: number;
  cliente !:clientesI;
  estado !: number;
  message !: string;
  clienteForm !: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;


    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      const navigation= this.router.getCurrentNavigation();
      this.cliente = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.cliente == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoClientes']);
          }else{
            this.clienteForm.patchValue(this.cliente);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarCliente() : void{

  if( this.bandera==1){
        this.api.PostNewCliente(this.clienteForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;
            if (this.estado == 200) {
              swal.fire({

                title: 'Cliente creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoClientes']);
            } else {
              swal.fire({

                title: 'Cliente no se ha creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })

            }
          });

        } else this.toChange();
    this.clienteForm.reset();
}

toChange(): void{


      this.api.PutModifyCliente(this.cliente.idCliente,this.clienteForm.value).subscribe(
        resp=>{

          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu trabajo ha sido guardado',
            showConfirmButton: false,
            timer: 1500
          })


      },error => console.error(error));
      this.router.navigate(['listadoClientes']);
    }
    toList() :void{
      this.router.navigate(['listadoClientes']);
    }
    toListVentas() :void{
      this.router.navigate(['listadoVentas']);
    }

    private initForm(): void {
      this.clienteForm = this.fb.group({
        idCliente: ['',[Validators.required]],
        nit:['',[Validators.required]],
        nombreCompleto:['',[Validators.required]],
        telefono:['',[Validators.required, Validators.minLength(10)]],
        direccion:['',[Validators.required]],
        correoElectronico:['',[Validators.required, Validators.pattern(this.isEmail)]],

      });
    }
  formularioReset():void{
      this.clienteForm.reset();
    }

    isValidField(campo:string): boolean{
      const fieldName = this.clienteForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
}

