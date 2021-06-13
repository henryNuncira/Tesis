import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { usuarioI } from 'src/app/shared/models/usuario.inteface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {


  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoUsuarios !: usuarioI[];
 usuario !: usuarioI;


  constructor(http: HttpClient ,private api:ApiService,private router:Router) {}

  ngOnInit(): void {
    this.getAllUsuarios();
  }


 public getAllUsuarios(){

  this.api.getAllUsuarios().subscribe(resp =>
    {
      this.listadoUsuarios= resp;
      console.log(this.listadoUsuarios);

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditarUsuario(usuarioEdi:any):void{
    this.navigationExtras.state = usuarioEdi;
    this.router.navigate(['editarUsuarios'], this.navigationExtras)
  }


  toDeleteUsuario(idUsuario:number) : void{
    this.api.DeleteUsuario(idUsuario).subscribe(resp=>{


      this.ngOnInit();

      Swal.fire({
        title: '¿Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire(
            'Borrado!',
            'Tu archivo ha sido eliminado.',
            'success'
          )
        }
      })
    },error => console.error(error));

  }

  toList():void{
    this.router.navigate(['listadoUsuario'])
  }
  toNuevoUsuario():void{
    this.router.navigate(['nuevoUsuarios'])
  }
}
