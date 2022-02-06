import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './plantillas/dashboard/dashboard.component';
import { DatatableComponent } from './vistas/datatable/datatable.component';
import { AboutComponent } from './shared/components/about/about.component';
import { BlogComponent } from './shared/components/blog/blog.component';
import { ContactoComponent } from './shared/components/contacto/contacto.component';
import { LoginComponent } from './shared/components/login/login.component';
import { ProductosComponent } from './shared/components/productos/productos.component';
import { ContlistasComponent } from './shared/components/contlistas/contlistas.component';
import { ContlistasAdminComponent } from './shared/components/contlistas-admin/contlistas-admin.component';
import { GuardGuard } from './shared/guards/guard.guard';




const routes: Routes = [
  {path:'',redirectTo: 'dashboard',pathMatch:'full'},
  {path:'datatable',component:DatatableComponent},
{path: 'dashboard', component:DashboardComponent},
{path: 'login', component:LoginComponent},
{path: 'contlistas', component:ContlistasComponent, canActivate:[GuardGuard]},
{path: 'contAdmin', component:ContlistasAdminComponent, canActivate:[GuardGuard]},
{path: 'acerca', component:AboutComponent},
{path: 'blog', component:BlogComponent},
{path: 'productos', component:ProductosComponent},
{path: 'contacto', component:ContactoComponent},
  { path: 'listadoCategorias', loadChildren: () => import('./vistas/categorias/listado-categorias/listado-categorias.module').then(m => m.ListadoCategoriasModule), canActivate:[GuardGuard] },
  { path: 'editarCategorias', loadChildren: () => import('./vistas/categorias/editar-categorias/editar-categorias.module').then(m => m.EditarCategoriasModule) },
  { path: 'nuevoCategorias', loadChildren: () => import('./vistas/categorias/nuevo-categorias/nuevo-categorias.module').then(m => m.NuevoCategoriasModule) },
  { path: 'detallesCategorias', loadChildren: () => import('./vistas/categorias/detalles-categorias/detalles-categorias.module').then(m => m.DetallesCategoriasModule) },
  { path: 'listadoClientes', loadChildren: () => import('./vistas/clientes/listado-clientes/listado-clientes.module').then(m => m.ListadoClientesModule), canActivate:[GuardGuard]},
  { path: 'nuevoClientes', loadChildren: () => import('./vistas/clientes/nuevo-clientes/nuevo-clientes.module').then(m => m.NuevoClientesModule) },
  { path: 'editarClientes', loadChildren: () => import('./vistas/clientes/editar-clientes/editar-clientes.module').then(m => m.EditarClientesModule) },
  { path: 'detallesClientes', loadChildren: () => import('./vistas/clientes/detalles-clientes/detalles-clientes.module').then(m => m.DetallesClientesModule) },
  { path: 'listadoProductos', loadChildren: () => import('./vistas/productos/listado-productos/listado-productos.module').then(m => m.ListadoProductosModule), canActivate:[GuardGuard] },
  { path: 'nuevoProductos', loadChildren: () => import('./vistas/productos/nuevo-productos/nuevo-productos.module').then(m => m.NuevoProductosModule) },
  { path: 'detallesProductos', loadChildren: () => import('./vistas/productos/detalles-productos/detalles-productos.module').then(m => m.DetallesProductosModule) },
  { path: 'editarProductos', loadChildren: () => import('./vistas/productos/editar-productos/editar-productos.module').then(m => m.EditarProductosModule) },
  { path: 'listadoProveedores', loadChildren: () => import('./vistas/proveedores/listado-proveedores/listado-proveedores.module').then(m => m.ListadoProveedoresModule), canActivate:[GuardGuard] },
  { path: 'listadoUsuarios', loadChildren: () => import('./vistas/usuarios/listado-usuarios/listado-usuarios.module').then(m => m.ListadoUsuariosModule) },
  { path: 'nuevoUsuarios', loadChildren: () => import('./vistas/usuarios/nuevo-usuarios/nuevo-usuarios.module').then(m => m.NuevoUsuariosModule) },
  { path: 'editarUsuarios', loadChildren: () => import('./vistas/usuarios/editar-usuarios/editar-usuarios.module').then(m => m.EditarUsuariosModule) },
  { path: 'detallesUsuarios', loadChildren: () => import('./vistas/usuarios/detalles-usuarios/detalles-usuarios.module').then(m => m.DetallesUsuariosModule) },
  { path: 'nuevoProveedores', loadChildren: () => import('./vistas/proveedores/nuevo-proveedores/nuevo-proveedores.module').then(m => m.NuevoProveedoresModule) },
  { path: 'editarProveedores', loadChildren: () => import('./vistas/proveedores/editar-proveedores/editar-proveedores.module').then(m => m.EditarProveedoresModule) },
  { path: 'detallesProveedores', loadChildren: () => import('./vistas/proveedores/detalles-proveedores/detalles-proveedores.module').then(m => m.DetallesProveedoresModule) },
  { path: 'detallesVendedores', loadChildren: () => import('./vistas/vendedores/detalles-vendedores/detalles-vendedores.module').then(m => m.DetallesVendedoresModule) },
  { path: 'listadoVendedores', loadChildren: () => import('./vistas/vendedores/listado-vendedores/listado-vendedores.module').then(m => m.ListadoVendedoresModule), canActivate:[GuardGuard] },
  { path: 'nuevoVendedores', loadChildren: () => import('./vistas/vendedores/nuevo-vendedores/nuevo-vendedores.module').then(m => m.NuevoVendedoresModule) },
  { path: 'editarVendedores', loadChildren: () => import('./vistas/vendedores/editar-vendedores/editar-vendedores.module').then(m => m.EditarVendedoresModule) },
  { path: 'editarVenta', loadChildren: () => import('./vistas/venta/editar-venta/editar-venta.module').then(m => m.EditarVentaModule) },
  { path: 'listadoVentas', loadChildren: () => import('./vistas/venta/listado-venta/listado-venta.module').then(m => m.ListadoVentaModule) },
  { path: 'detallesVenta', loadChildren: () => import('./vistas/venta/detalles-venta/detalles-venta.module').then(m => m.DetallesVentaModule) },
  { path: 'nuevaVenta', loadChildren: () => import('./vistas/venta/nuevo-venta/nuevo-venta.module').then(m => m.NuevoVentaModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DashboardComponent,

  DatatableComponent,

]
