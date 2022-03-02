import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { rolI } from 'src/app/shared/models/rol.interface';
import { usuarioI } from 'src/app/shared/models/usuario.inteface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  bandera : number =0;
  usuario !: usuarioI;
  estado !: number;
  message !: string;
  usuarioForm !: FormGroup;
  listadoRoles !: rolI[];
 // model: usuarioI ={idUsuario:0,nombreUsuario:'',password:'',activo: true, idRol: 0};

  ngOnInit(): void{
    this.getAllRolesLista();
  }
    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      const navigation= this.router.getCurrentNavigation();
      this.usuario = navigation?.extras?.state?.value;
      this.initForm();
    }
    public getAllRolesLista(){

      this.api.getAllRoles().subscribe(resp =>
        {
          this.listadoRoles= resp;
          console.log(this.listadoRoles);
    
        },error => console.error(error));
    
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
