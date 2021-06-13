import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { productosI } from 'src/app/shared/models/productos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoProductos !: productosI[];
 producto !: productosI;


  constructor(http: HttpClient ,private api:ApiService,private router:Router) {}

  ngOnInit(): void {
    this.getAllProductos();
  }


 public getAllProductos(){

  this.api.getAllProducto().subscribe(resp =>
    {
      this.listadoProductos= resp;
      console.log(this.listadoProductos);

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditarProducto(productoEdi:any):void{
    this.navigationExtras.state= productoEdi;
    this.router.navigate(['editarProductos'], this.navigationExtras)
  }
  toVerProducto(productoVer:any):void{
    this.navigationExtras.state = productoVer;
    this.router.navigate(['detallesProductos'], this.navigationExtras);
  }

  toDeleteProducto(idProducto:number) : void{
    this.api.DeleteProducto(idProducto).subscribe(resp=>{


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
    this.router.navigate(['listadoProductos'])
  }
  toNuevoProducto():void{
    this.router.navigate(['nuevoProductos'])
  }
}
