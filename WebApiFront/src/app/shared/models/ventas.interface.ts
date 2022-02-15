import { detalleVentasI } from "./detalleVenta.interface";

export interface ventasI
{
   idVenta : number;
   tipoComprobante : string;
   numeroComprobante : string;
   fecha : string;
   impuesto :number;
   total :number;
   detalles : detalleVentasI[];
   idCliente : number;
   idVendedor : number;
}
