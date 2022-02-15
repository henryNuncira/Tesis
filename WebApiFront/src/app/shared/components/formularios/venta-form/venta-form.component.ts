import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { detalleVentasI } from 'src/app/shared/models/detalleVenta.interface';
import { ventasI } from 'src/app/shared/models/ventas.interface';

import { ReactiveFormsModule } from "@angular/forms"
import Swal from 'sweetalert2';
import { clientesI } from 'src/app/shared/models/clientes.interface';
import { vendedoresI } from 'src/app/shared/models/vendedores.interface';
import { productosI } from 'src/app/shared/models/productos.interface';

@Component({
  selector: 'app-venta-form',
  templateUrl: './venta-form.component.html',
})
export class VentaFormComponent implements OnInit {
  
  venta : ventasI;
  detalles : detalleVentasI;
  ventaForm !: FormGroup;
  estado !: number;
  detallesABorrar : number[] = [];
  listadoClientes !: clientesI[];
  listadoVendedores !: vendedoresI[];
  listadoProductos !: productosI[];
  productoElegido !: productosI;
 
ngOnInit()
{
  this.ventaForm = this.fb.group({
    idVenta : 0,
    tipoComprobante: "",
    numeroComprobante: "",
    impuesto :0,
    idCliente : 1,
    idVendedor : 1,
    detalles: this.fb.array([])
  });
  this.api.getAllClientes().subscribe(resp =>{this.listadoClientes= resp;});
  this.api.getAllProducto().subscribe(resp =>{this.listadoProductos= resp;});
  this.api.getAllVendedores().subscribe(resp =>{this.listadoVendedores= resp;});
  
}
    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      const navigation= this.router.getCurrentNavigation();
      this.venta = navigation?.extras?.state?.value;
      this.detalles = navigation?.extras?.state?.value;
      this.initForm();
    }

    agregarDetalle () 
    {
      let detallesVentasArr = this.ventaForm.get('detalles') as FormArray;
      let detallesVentasFg = this.construirDetalle();
      detallesVentasArr.push(detallesVentasFg);
    }
    construirDetalle()
    {
      return this.fb.group({
          idDetalleVenta : 1,
          idProducto : 1,
          cantidad : 1,
          precio : 1,
          descuento : 1,
          idVenta : 1,
        });
    }
    removerDetalle(index: number)
    {
      let detallesVentasArr = this.ventaForm.get('detalles') as FormArray;
      let detelleRemover = detallesVentasArr.at(index) as FormGroup;
      if (detelleRemover.controls['idDetalleVenta'].value != '0'){
        this.detallesABorrar.push(<number> detelleRemover.controls['idDetalleVenta'].value);
      }
      detallesVentasArr.removeAt(index);
    }
    get detalle(): FormArray {
      return this.ventaForm.get('detalles') as FormArray;
    }
    
     toGuardarVenta() : void
    {
        console.log('GuardadoFuck?', this.ventaForm);
        console.log(this.ventaForm.value);

     
          this.api.PostNewVentas(this.ventaForm.value).subscribe(
            respuesta =>{
              this.estado= respuesta.state;

              if (this.estado == 200) {
          Swal.fire({

            title: 'venta creada correctamente',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          this.router.navigate(['listadoVentas']);
          this.ventaForm.reset();
        } else {
          Swal.fire({

            title: 'venta no se ha creado correctamente',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })

        }

      }
    );
    }
    private initForm(): void {
      this.ventaForm = this.fb.group({
        tipoComprobante:['',[Validators.required]],
        numeroComprobante:['',[Validators.required]],
        impuesto:['',[Validators.required]],
       

      });
    }
    toList() :void{
      this.router.navigate(['listadoVentas']);
    }
    formularioReset():void{
      this.ventaForm.reset();
    }
    isValidField(campo:string): boolean{
      const fieldName = this.ventaForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }

