import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ventasI } from 'src/app/shared/models/ventas.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-venta',
  templateUrl: './detalles-venta.component.html',
  styleUrls: ['./detalles-venta.component.css']
})
export class DetallesVentaComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  venta : ventasI;
  constructor(private router:Router,private api:ApiService) {
    const navigation = this.router.getCurrentNavigation();
    this.venta = navigation?.extras?.state?.value;
    console.log(this.venta);
   }

  ngOnInit(): void {
    if(typeof this.venta == 'undefined'){
      this.router.navigate(['listadoVenta'])
    }
  }
  toEditarVenta():void{
    this.navigationExtras.state = this.venta;
    this.router.navigate(['editarVenta'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['listadoVenta']);
  }
 toDeleteVenta() : void{
    this.api.DeleteVenta(this.venta.idVenta).subscribe(resp=>{
      // this.estado=resp.state;
      // this.message=resp.message;
      console.log(resp);
      this.router.navigate(['listadoVenta']);
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

