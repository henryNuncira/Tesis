import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ventasI } from 'src/app/shared/models/ventas.interface';
import Swal from 'sweetalert2';
import { DialogVentaComponent } from '../dialog/dialogVenta.component';

@Component({
  selector: 'app-listado-venta',
  templateUrl: './listado-venta.component.html',
  styleUrls: ['./listado-venta.component.css']
})
export class ListadoVentaComponent implements OnInit {

  readonly width: string = '600px';
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoVentas !: ventasI[];
 Venta !: ventasI;


  constructor(http: HttpClient ,private api:ApiService,private router:Router,
    public dialog:MatDialog) {}

  ngOnInit(): void {
    this.getAllVentas();
  }


 public getAllVentas(){

  this.api.getAllVentas().subscribe(resp =>
    {
      this.listadoVentas= resp;
      console.log(this.listadoVentas);

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditarVenta(ventaEdi:any):void{
    this.navigationExtras.state = ventaEdi;
    this.router.navigate(['editarVenta'], this.navigationExtras)
  }
  toVerVenta(ventaVer:any):void{
    this.navigationExtras.state = ventaVer;
    this.router.navigate(['detallesVenta'], this.navigationExtras);
  }

  toDeleteVenta(idVenta:number) : void{
    this.api.DeleteVenta(idVenta).subscribe(resp=>{


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
    this.router.navigate(['listadoVenta'])
  }
  toNuevoVenta():void{
   const dialogRef= this.dialog.open(DialogVentaComponent,{
    width : this.width
   });
  }
}
