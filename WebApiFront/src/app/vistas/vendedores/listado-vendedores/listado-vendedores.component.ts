import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { vendedoresI } from 'src/app/shared/models/vendedores.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-vendedores',
  templateUrl: './listado-vendedores.component.html',
  styleUrls: ['./listado-vendedores.component.css']
})
export class ListadoVendedoresComponent implements OnInit {

  vendedor !:vendedoresI;

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoVendedores !: vendedoresI[];


  constructor(http: HttpClient ,private api:ApiService,private router:Router) {}

  ngOnInit(): void {
  this.getAllVendedores();
  }


 public getAllVendedores(){

  this.api.getAllVendedores().subscribe(resp =>
    {
      this.listadoVendedores= resp;

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditarVendedor(vendedores:any):void{
    this.navigationExtras.state!.value = vendedores;
    this.router.navigate(['editarVendedores'], this.navigationExtras)
  }
  toVerVendedor(vendedores:any):void{
    this.navigationExtras.state!.value = vendedores;
    this.router.navigate(['detallesVendedores'], this.navigationExtras);
  }

  toDeleteVendedor(idVendedor:number) : void{
    this.api.DeleteVendedor(idVendedor).subscribe(resp=>{


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
    this.router.navigate(['listadoVendedores'])
  }
  toNuevoVendedor():void{
    this.router.navigate(['nuevoVendedores'])
  }
}
