import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';


import { MaterialModule } from './material/material.module';
import { MatSliderModule } from '@angular/material/slider';

import { DataTablesModule } from "angular-datatables";
import { DatatableComponent } from './vistas/datatable/datatable.component';
import { DashboardComponent } from './plantillas/dashboard/dashboard.component';
import { DashboardModule } from './plantillas/dashboard/dashboard.module';
import { AboutComponent } from './shared/components/about/about.component';
import { BlogComponent } from './shared/components/blog/blog.component';
import { ContactoComponent } from './shared/components/contacto/contacto.component';
import { HeaderModule } from './plantillas/header/header.module';
import { LoginModule } from './shared/components/login/login.module';
import { ProductosComponent } from './shared/components/productos/productos.component';
import { ContlistasComponent } from './shared/components/contlistas/contlistas.component';
import { ContlistasAdminComponent } from './shared/components/contlistas-admin/contlistas-admin.component';
import { RouterModule } from '@angular/router';
import { CategoriasFormModule } from './shared/components/formularios/categorias-form/categorias-form.module';
import { ClientesFormModule } from './shared/components/formularios/clientes-form/clientes-form.module';
import { ProductosFormModule } from './shared/components/formularios/productos-form/productos-form.module';
import { ProveedorFormModule } from './shared/components/formularios/proveedor-form/proveedor-form.module';
import { UsuarioFormModule } from './shared/components/formularios/usuario-form/usuario-form.module';
import { VendedoresFormModule } from './shared/components/formularios/vendedores-form/vendedores-form.module';
import { VentaFormModule } from './shared/components/formularios/venta-form/venta-form.module';
import { FooterComponent } from './plantillas/footer/footer.component';
import { HeaderComponent } from './plantillas/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProductosComponent,
    DashboardComponent,
    DatatableComponent,
    AboutComponent,
    BlogComponent,
    ContactoComponent,
    ContlistasComponent,
    ContlistasAdminComponent

 ],
  imports: [
    RouterModule,
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    MatTableModule,
    MatSliderModule,
    MaterialModule,
    DashboardModule,
    HeaderModule,
    LoginModule,
    CategoriasFormModule,
    ClientesFormModule,
    ProductosFormModule,
    ProveedorFormModule,
    UsuarioFormModule,
    VendedoresFormModule,
    VentaFormModule

    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
