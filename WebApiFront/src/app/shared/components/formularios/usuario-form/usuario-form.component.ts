import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNumeric } from 'rxjs/internal-compatibility';
import { ApiService } from 'src/app/services/api/api.service';
import { Activo } from 'src/app/shared/models/activo.enum';
import { Rol } from 'src/app/shared/models/rol.enum';
import { usuarioI } from 'src/app/shared/models/usuario.inteface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  bandera : number =0;
  activos : any[]=[];
  roles : any[]=[];
  usuario !: usuarioI;
  estado !: number;
  message !: string;
  usuarioForm !: FormGroup;
  model: usuarioI ={idUsuario:0,nombreUsuario:'',password:'',activo: Activo.Inactivo, rol: Rol.Administrador};


    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      this.roles = Object.keys(Rol).filter(k => isNaN(Number(k)));
      this.activos = Object.keys(Activo).filter(f => isNaN(Number(f)));
      const navigation= this.router.getCurrentNavigation();
      this.usuario = navigation?.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {
      
     /*  for(let item in this.rol){
        if (isNaN(Number(item))){
          this.roles.push({text:item, value: this.rol[item]});
        }
      }
      for(let item in this.activo){
        if (isNaN(Number(item))){
          this.activos.push({text:item, value: this.activo[item]});
        }
      } */
      console.log(Object.keys(Rol));
      console.log(this.roles);
      console.log(this.activos);
    }

    toGuardarUsuario() : void{


    console.log(this.usuarioForm.value);

        this.api.PostNewUsuario(this.usuarioForm.value).subscribe(
          respuesta =>{
            this.estado= respuesta.state;
            if (this.estado == 200) {
              Swal.fire({

                title: 'Usuario creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoUsuario']);
            } else {
              Swal.fire({

                title: 'Usuario no se ha creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })

            }
          });


    this.usuarioForm.reset();
}


    toList() :void{
      this.router.navigate(['listadoUsuarios']);
    }

    private initForm(): void {
      this.usuarioForm = this.fb.group({
        idUsuario: ['',[Validators.required]],
        nombreUsuario :['',[Validators.required]],
        password :['',[Validators.required]],

      });
    }
    isValidField(campo:string): boolean{
      const fieldName = this.usuarioForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }
