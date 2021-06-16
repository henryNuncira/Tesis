import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { categoriasI } from 'src/app/shared/models/categorias.iterface';
import swal from 'sweetalert2';


@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {


  bandera : number =0;
  ProveedorBorrar !: number;
  categoria :categoriasI;
  estado !: number;
  message !: string;
  categoriaForm !: FormGroup;



    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      const navigation= this.router.getCurrentNavigation();
      this.categoria = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.categoria == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoCategorias']);
          }else{
            this.categoriaForm.patchValue(this.categoria);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarCategoria() : void{
      debugger;

if( this.bandera==1){ debugger;
        this.api.PostNewCategorias(this.categoriaForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;

            if (this.estado == 200) {
              swal.fire({

                title: 'Categoria creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoCategorias']);
            } else {
              swal.fire({

                title: 'Categoria no se ha creado correctamente',
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

        } else this.toChange();
   }

        toChange(): void{


      this.api.PutModifyCategorias(this.categoria.idCategoria,this.categoriaForm.value).subscribe(
        resp=>{

          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu trabajo ha sido guardado',
            showConfirmButton: false,
            timer: 1500
          })


      },error => console.error(error));
      this.router.navigate(['listadoCategorias']);
    }
    toList() :void{
      this.router.navigate(['listadoCategorias']);
    }

    private initForm(): void {
      this.categoriaForm = this.fb.group({
        idCategoria: ['',[Validators.required]],
        nombre:['',[Validators.required]],
        descripcion:['',[Validators.required]],


      });
    }
    isValidField(campo:string): boolean{
      const fieldName = this.categoriaForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }

