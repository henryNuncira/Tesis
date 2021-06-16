import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { vendedoresI } from 'src/app/shared/models/vendedores.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-vendedores',
  templateUrl: './detalles-vendedores.component.html',
  styleUrls: ['./detalles-vendedores.component.css']
})
export class DetallesVendedoresComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  vendedor: vendedoresI;
  constructor(private router:Router,private api:ApiService) {
    const navigation = this.router.getCurrentNavigation();
    this.vendedor = navigation?.extras?.state?.value;
    console.log(this.vendedor);
   }

  ngOnInit(): void {
    if(typeof this.vendedor == 'undefined'){
      this.router.navigate(['listadoVendedores'])
    }
  }
  toEditarVendedor():void{
    this.navigationExtras.state!.value = this.vendedor;
    this.router.navigate(['editarVendedores'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['listadoVendedores']);
  }
 toDeleteVendedor() : void{
    this.api.DeleteVendedor(this.vendedor.idVendedor).subscribe(resp=>{
      // this.estado=resp.state;
      // this.message=resp.message;
      console.log(resp);
      this.router.navigate(['listadoVendedores']);
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

