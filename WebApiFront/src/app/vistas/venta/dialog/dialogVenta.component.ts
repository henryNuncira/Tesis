import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { detalleVentasI } from "src/app/shared/models/detalleVenta.interface";
import { ventasI } from "src/app/shared/models/ventas.interface";
import { ApiService } from "src/app/services/api/api.service";

@Component({

  templateUrl: 'dialogventa.component.html',

})
export class DialogVentaComponent  {
public venta: ventasI;
public detalle: detalleVentasI[];

public detalleForm = this.fb.group({
  cantidad: ['',[Validators.required]],
  precio: ['',[Validators.required]],
  descuento: ['',[Validators.required]],
  idProducto: [1,[Validators.required]],

})
  constructor(
    public dialogRef: MatDialogRef<DialogVentaComponent>,
    public snackBar : MatSnackBar,
    private formBuilder: FormBuilder,
    public api:ApiService,
    private fb:FormBuilder,
    private router:Router,
  ){
    this.detalle= [];
    //const navigation= this.router.getCurrentNavigation();
    //this.venta = navigation.extras?.state?.value;
     this.venta={idVenta:0,idCliente:3,tipoComprobante:"",numeroComprobante:"",fecha:"",impuesto:0,Total:0,detalle:[]};
    //this.venta = {idCliente: 3, detalle:[]}
  }

  close(){
    this.dialogRef.close();
  }
  addDetalle(){
    this.detalle.push(this.detalleForm.value);
  }
  addVenta(){
    this.venta.detalle= this.detalle;
    this.api.PostNewVentas(this.venta).subscribe(resp =>{
      if (resp.state==200)
      {
        this.dialogRef.close();
        this.snackBar.open('venta hecha con éxito','',{
          duration:2000
        });
      }
    })
  }
}
