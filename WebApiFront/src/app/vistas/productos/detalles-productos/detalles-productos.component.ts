import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { productosI } from 'src/app/shared/models/productos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.component.html',
  styleUrls: ['./detalles-productos.component.css']
})
export class DetallesProductosComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  producto : productosI;
  constructor(private router:Router,private api:ApiService) {
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state?.value;

   }

  ngOnInit(): void {
    if(typeof this.producto == 'undefined'){
      this.router.navigate(['listadoProductos'])
    }
  }
  toEditarProducto():void{
    this.navigationExtras.state = this.producto;
    this.router.navigate(['editarProductos'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['listadoProductos']);
  }
 toDeleteProducto() : void{
    this.api.DeleteProducto(this.producto.idProducto).subscribe(resp=>{
      // this.estado=resp.state;
      // this.message=resp.message;
      console.log(resp);
      this.router.navigate(['listadoProductos']);
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
