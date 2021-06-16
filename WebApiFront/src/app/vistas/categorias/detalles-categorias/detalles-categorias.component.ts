import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { categoriasI } from 'src/app/shared/models/categorias.iterface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-categorias',
  templateUrl: './detalles-categorias.component.html',
  styleUrls: ['./detalles-categorias.component.css']
})
export class DetallesCategoriasComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state :{
      value: null
    }
  }
  categoria: categoriasI;
  constructor(private router:Router,private api:ApiService) {
    const navigation = this.router.getCurrentNavigation();
    this.categoria = navigation?.extras?.state?.value;
    console.log(this.categoria);
   }

  ngOnInit(): void {
    if(typeof this.categoria == 'undefined'){
      this.router.navigate(['listadoCategorias'])
    }
  }
  toEditarCategoria():void{
    this.navigationExtras.state!.value = this.categoria;
    this.router.navigate(['editarCategorias'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['listadoCategorias']);
  }
  toDeleteCategoria() : void{
    this.api.DeleteCategoria(this.categoria.idCategoria).subscribe(resp=>{
      // this.estado=resp.state;
      // this.message=resp.message;
      console.log(resp);
      this.router.navigate(['listadoCategorias']);
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
}

