import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { productosI } from 'src/app/shared/models/productos.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
})
export class ProductsFormComponent implements OnInit {
  bandera : number =0;

  producto !: productosI;
  estado !: number;
  message !: string;
  productosForm !: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;


    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      const navigation= this.router.getCurrentNavigation();
      this.producto = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.producto == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoProductos']);
          }else{
            this.productosForm.patchValue(this.producto);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarProducto() : void{
{// si el proveedor no existe creelo

    // if( this.proveedorForm.valid){
if( this.bandera==1){
        this.api.PostNewProducto(this.productosForm.value).subscribe(
          respuesta =>{
            this.estado = respuesta.state;

            if (this.estado == 200) {
              Swal.fire({

                title: 'Producto creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoProductos']);
            } else {
              Swal.fire({

                title: 'Producto no se ha creado correctamente',
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
    this.productosForm.reset();
}

        }

        toChange(): void{
      //this.ProveedorBorrar=7;

      this.api.PutModifyProducto(this.producto.idProducto,this.productosForm.value).subscribe(
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
      this.router.navigate(['listadoProductos']);
    }
    toList() :void{
      this.router.navigate(['listadoProductos']);
    }

    private initForm(): void {
      this.productosForm = this.fb.group({
        idProducto: ['',[Validators.required]],
        nombreCompleto:['',[Validators.required]],
        precio:['',[Validators.required]],
        stock:['',[Validators.required]],
        clasificacion:['',[Validators.required]],
        detallesVenta:['',[Validators.required]],

      });
    }
    isValidField(campo:string): boolean{
      const fieldName = this.productosForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }
