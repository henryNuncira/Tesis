import { detalleVentasI } from "./detalleVenta.interface";

export interface ventasI
{
   idVenta : number;
   tipoComprobante : string;
   numeroComprobante : string;
   fecha : string;
   impuesto :number;
   Total :number;
  detalle : detalleVentasI[];
  idCliente : number;
}