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
  productoBorrar !: number;
  producto !:productosI;
  estado !: number;
  message !: string;
  productoForm !: FormGroup;
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
            this.productoForm.patchValue(this.producto);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarProducto() : void{

  if( this.bandera==1){
        this.api.PostNewProducto(this.productoForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;
            if (this.estado == 200) {
              Swal.fire({

                title: 'producto creado correctamente',
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

                title: 'producto no se ha creado correctamente',
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
    this.productoForm.reset();
}

toChange(): void{


      this.api.PutModifyProducto(this.producto.idProducto,this.productoForm.value).subscribe(
        resp=>{

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
      this.productoForm = this.fb.group({
        idProducto: ['',[Validators.required]],
        nombreCompleto:['',[Validators.required]],
        precio:['',[Validators.required]],
        stock:['',[Validators.required]],
        clasificacion:['',[Validators.required]],
        detallesVenta:['',[Validators.required]],

      });
    }
  formularioReset():void{
      this.productoForm.reset();
    }

    isValidField(campo:string): boolean{
      const fieldName = this.productoForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
}
