import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { detalleVentasI } from 'src/app/shared/models/detalleVenta.interface';
import { ventasI } from 'src/app/shared/models/ventas.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-venta-form',
  templateUrl: './venta-form.component.html',
})
export class VentaFormComponent implements OnInit {
  
  venta : ventasI;
  detallesVentas : detalleVentasI;
  ventaForm !: FormGroup;
  estado !: number;
  detallesABorrar : number[] = [];
 
ngOnInit()
{
  this.ventaForm = this.fb.group({
    tipoComprobante: "",
    numeroComprobante: "",
    detallesVentas: this.fb.array([])
  });
}
    constructor(private router:Router, private fb:FormBuilder, private api:ApiService) {
      const navigation= this.router.getCurrentNavigation();
      this.venta = navigation?.extras?.state?.value;
      this.detallesVentas = navigation?.extras?.state?.value;

      this.initForm();
    }

    agregarDetalle () 
    {
      let detallesVentasArr = this.ventaForm.get('detallesVentas') as FormArray;
      let detallesVentasFg = this.construirDetalle();
      detallesVentasArr.push(detallesVentasFg);
      Swal.fire({

        title: 'Agregó nuevo detalle, correctamente',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    construirDetalle()
    {
      return this.fb.group({
          idDetalleVenta : '0',
          idProducto : '1',
          cantidad : '',
          precio : '',
          descuento : '0',
       //   idVenta : this.venta.idVenta != null ? this.venta.idVenta :0
        });
    }
    removerDetalle(index: number)
    {
      let detallesVentasArr = this.ventaForm.get('detallesVentas') as FormArray;
      let detelleRemover = detallesVentasArr.at(index) as FormGroup;
      if (detelleRemover.controls['idDetalleVenta'].value != '0'){
        this.detallesABorrar.push(<number> detelleRemover.controls['idDetalleVenta'].value);
      }
      detallesVentasArr.removeAt(index);
    }
    toGuardarVenta() : void
    {
        console.log('Saved', this.ventaForm);
        console.log(this.ventaForm.value);

     
          this.api.PostNewVentas(this.ventaForm.value).subscribe(
            respuesta =>{
              this.estado= respuesta.state;

              if (this.estado == 200) {
          Swal.fire({

            title: 'venta creado correctamente',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          this.router.navigate(['listadoVentas']);
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
    isValidField(campo:string): boolean{
      const fieldName = this.ventaForm.get(campo);
      return fieldName!.invalid && fieldName!.touched;
    }
  }

