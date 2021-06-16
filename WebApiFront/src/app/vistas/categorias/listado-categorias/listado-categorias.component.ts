import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { categoriasI } from 'src/app/shared/models/categorias.iterface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {

  navigationExtras : NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoCategoria !: categoriasI[];
 categoria !:categoriasI;


  constructor(http: HttpClient ,private api:ApiService,private router:Router) {}

  ngOnInit(): void {
    this.getAllCategoria();
  }


 public getAllCategoria(){

  this.api.getAllCategorias().subscribe(resp =>
    {
      this.listadoCategoria= resp;
      console.log(this.listadoCategoria);

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditarCategoria(categoriaEdi:any):void{
    this.navigationExtras.state!.value = categoriaEdi;
    this.router.navigate(['editarCategorias'], this.navigationExtras)
  }
  toVerCategoria(categoriaVer:any):void{
    this.navigationExtras.state!.value = categoriaVer;
    this.router.navigate(['detallesCategorias'], this.navigationExtras);
  }

  toDeleteCategoria(idCategoria:number) : void{
    this.api.DeleteCategoria(idCategoria).subscribe(resp=>{


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
    this.router.navigate(['listadoCategorias'])
  }
  toNuevoCategoria():void{
    this.router.navigate(['nuevoCategorias'])
  }
}
