import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { categoriasI } from 'src/app/shared/models/categorias.iterface';
import { clientesI } from 'src/app/shared/models/clientes.interface';
import { detalleVentasI } from 'src/app/shared/models/detalleVenta.interface';
import { productosI } from 'src/app/shared/models/productos.interface';
import { proveedoresI } from 'src/app/shared/models/proveedoresI.inteface';
import { responseI } from 'src/app/shared/models/response.interface';
import { usuarioI } from 'src/app/shared/models/usuario.inteface';
import { vendedoresI } from 'src/app/shared/models/vendedores.interface';
import { ventasI } from 'src/app/shared/models/ventas.interface';


@Injectable({
  providedIn: 'root'
})

export class ApiService {


  url:string = "http://localhost:5000/api/Home/"

  constructor(private http:HttpClient) { }

  getAllproveedores():Observable<proveedoresI[]>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "GetProveedores";

    return this.http.get<proveedoresI[]>(direccion,{headers:header});

  }
  PostNewProveedor(proveedor: proveedoresI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoProveedor";
    return this.http.post<responseI>(direccion, proveedor, {headers:header});
  }


PutModifyProveedor(idProveedor:number, proveedor : proveedoresI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutProveedor/"+ idProveedor;
  return this.http.put<responseI>(direccion, proveedor, {headers:header});
}

DeleteProveedor(idProveedor:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteProveedor/"+ idProveedor;
  return this.http.delete<responseI>(direccion,{headers:header});

}

//-------------------clientes****** crud de la Api....

getAllClientes():Observable<clientesI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetClientes";

  return this.http.get<clientesI[]>(direccion,{headers:header});
}
PostNewCliente(cliente: clientesI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoBodyCliente";
    return this.http.post<responseI>(direccion, cliente, {headers:header});
  }

  PutModifyCliente(idCliente:number, cliente : clientesI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutCliente/"+ idCliente;
  return this.http.put<responseI>(direccion, cliente, {headers:header});
}
DeleteCliente(idCliente:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteCliente/"+ idCliente;
  return this.http.delete<responseI>(direccion,{headers:header});

}

//----------------------********** vendedores -----------crud de la api
getAllVendedores():Observable<vendedoresI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetVendedores";

  return this.http.get<vendedoresI[]>(direccion,{headers:header});
}
PostNewVendedores(vendedor: clientesI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoVendedor";
    return this.http.post<responseI>(direccion, vendedor, {headers:header});
  }

  PutModifyVendedor(idVendedor:number, vendedor : vendedoresI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutVendedor/"+ idVendedor;
  return this.http.put<responseI>(direccion, vendedor, {headers:header});
}
DeleteVendedor(idVendedor:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteVendedor/"+ idVendedor;
  return this.http.delete<responseI>(direccion,{headers:header});

}
//----------------------********** categorias -----------crud de la api
getAllCategorias():Observable<categoriasI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetCategorias";
  return this.http.get<categoriasI[]>(direccion,{headers:header});
}
PostNewCategorias(categoria: categoriasI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoBodyCategoria";
    return this.http.post<responseI>(direccion, categoria, {headers:header});

  }

  PutModifyCategorias(idCategoria:number, categoria : categoriasI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutCategoria/"+ idCategoria;
  return this.http.put<responseI>(direccion, categoria, {headers:header});
}
DeleteCategoria(idCategoria:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteCategoria/"+ idCategoria;
  return this.http.delete<responseI>(direccion,{headers:header});

}
//----------------------********** productos -----------crud de la api
getAllProducto():Observable<productosI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetProductos";

  return this.http.get<productosI[]>(direccion,{headers:header});
}
PostNewProducto(producto: productosI[]): Observable<responseI>
  { debugger;
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoProducto";
    return this.http.post<responseI>(direccion, producto, {headers:header});

  }

  PutModifyProducto(idProducto:number, producto : productosI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutProducto/"+ idProducto;
  return this.http.put<responseI>(direccion, producto, {headers:header});
}
DeleteProducto(idProducto:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteProducto/"+ idProducto;
  return this.http.delete<responseI>(direccion,{headers:header});

}
//-------------------ventas****** crud de la Api....

getAllVentas():Observable<ventasI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetVentas";

  return this.http.get<ventasI[]>(direccion,{headers:header});
}
PostNewVentas(ventasO: ventasI): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoVenta";
    return this.http.post<responseI>(direccion, ventasO, {headers:header});
  }

  PutModifyVenta(idVenta:number, ventasO : ventasI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutVenta/"+ idVenta;
  return this.http.put<responseI>(direccion, ventasO, {headers:header});
}
DeleteVenta(idVenta:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteVenta/"+ idVenta;
  return this.http.delete<responseI>(direccion,{headers:header});

}
//-------------------DEtalles de ventas****** crud de la Api....

getAllDEtalleVentas():Observable<detalleVentasI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetDetallesVentas";

  return this.http.get<detalleVentasI[]>(direccion,{headers:header});
}
PostNewDetalleVentas(ventas: ventasI): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoDetalleVenta";
    return this.http.post<responseI>(direccion, ventas, {headers:header});
  }

//-------------------Usuarios****** crud de la Api....

getAllUsuarios():Observable<usuarioI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetUsuarios";

  return this.http.get<usuarioI[]>(direccion,{headers:header});
}
PostNewUsuario(usuarioO: usuarioI[]): Observable<responseI>
{     console.log('servicio nuevo');

   let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoUsuario";
    return this.http.post<responseI>(direccion, usuarioO, {headers:header});
  }

  PutModifyUsuario(idUsuario:number, usuario : usuarioI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutUsuario/"+ idUsuario;
  return this.http.put<responseI>(direccion, usuario, {headers:header});
}
DeleteUsuario(idUsuario:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteUsuario/"+ idUsuario;
  return this.http.delete<responseI>(direccion,{headers:header});

}
loginByUsuario(form:usuarioI[]):Observable<responseI>{

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PostLogin";

  return this.http.post<responseI>(direccion,form,{headers:header});
}

}
