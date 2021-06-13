import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { proveedoresI } from 'src/app/shared/models/proveedoresI.inteface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado-proveedores.component.html',
  styleUrls: ['./listado-proveedores.component.css']
})
export class ListadoProveedoresComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger= new Subject<any>();
  proveedor !:proveedoresI;
  id !: number;
  estado !: string;
  message !: string;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoProveedores !: proveedoresI[];


  constructor(http: HttpClient ,private api:ApiService,private router:Router) {}

  ngOnInit(): void {
  this.getAllProveedores();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

 public getAllProveedores(){
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    language:{
      url:'//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json'
    }
  };
  this.api.getAllproveedores().subscribe(resp =>
    {
      this.listadoProveedores= resp;

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditar(proveedores:any):void{
    this.navigationExtras.state = proveedores;
    this.router.navigate(['editarProveedores'], this.navigationExtras)
  }
  toVer(proveedores:any):void{
    this.navigationExtras.state = proveedores;
    this.router.navigate(['detallesProveedores'], this.navigationExtras);
  }

  toDelete(idProveedor:number) : void{
    this.api.DeleteProveedor(idProveedor).subscribe(resp=>{


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
    this.router.navigate(['listadoProveedores'])
  }
  toNuevo():void{
    this.router.navigate(['nuevoProveedores'])
  }
}

