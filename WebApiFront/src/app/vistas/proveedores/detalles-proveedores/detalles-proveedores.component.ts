import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { proveedoresI } from 'src/app/shared/models/proveedoresI.inteface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-proveedores',
  templateUrl: './detalles-proveedores.component.html',
  styleUrls: ['./detalles-proveedores.component.css']
})
export class DetallesProveedoresComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  proveedor: proveedoresI;
  constructor(private router:Router,private api:ApiService) {
    const navigation = this.router.getCurrentNavigation();
    this.proveedor = navigation?.extras?.state?.value;
    console.log(this.proveedor);
   }

  ngOnInit(): void {
    if(typeof this.proveedor == 'undefined'){
      this.router.navigate(['listadoProveedores'])
    }
  }
  toEditar():void{
    this.navigationExtras.state= this.proveedor;
    this.router.navigate(['editarProveedores'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['listadoProveedores']);
  }
 toDelete() : void{
    this.api.DeleteProveedor(this.proveedor.idProveedor).subscribe(resp=>{
      // this.estado=resp.state;
      // this.message=resp.message;
      console.log(resp);
      this.router.navigate(['listadoProveedores']);
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
