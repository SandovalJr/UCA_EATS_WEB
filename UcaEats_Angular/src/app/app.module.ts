import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// Buscador
import { Ng2SearchPipeModule } from "ng2-search-filter";

// Paginador
import { NgxPaginationModule } from "ngx-pagination";

// RX
import { ReactiveFormsModule } from "@angular/forms"; // <-- #1 import module
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"; // <-- #2 import module

// ANGULAR MATERIAL
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";

// SERVICIOS
import { AuthGuardService } from "../services/auth-guard.service";
import { AuthenticationService } from "../services/authentication.service";
import { MessageErrorsService } from "../services/messageError.service";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { InicioComponent } from "./components/inicio/inicio.component";
import { NavbarComponent } from "./components/inicio/partials/navbar/navbar.component";
import { FooterComponent } from "./components/inicio/partials/footer/footer.component";

// RUTAS
import { APP_ROUTES } from "./routes/routes";
import { LoginComponent } from "./components/sw/login/login.component";

// ADMIN
import { AdministradorComponent } from "./components/sw/administrador/administrador.component";
import { SidenavComponent } from "./components/sw/administrador/sidenav/sidenav.component";

// CLIENTE
import { ClienteComponent } from "./components/sw/cliente/cliente.component";
import { MenuInicioAdminComponent } from "./components/sw/administrador/menu-inicio-admin/menu-inicio-admin.component";
import { UsuariosComponent } from "./components/sw/administrador/funciones/usuarios/usuarios.component";
import { RegisterComponent } from "./components/sw/register/register.component";
import { ListarDireccionesComponent } from './components/sw/administrador/funciones/usuarios/listar-direcciones/listar-direcciones.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AdministradorComponent,
    ClienteComponent,
    SidenavComponent,
    MenuInicioAdminComponent,
    UsuariosComponent,
    RegisterComponent,
    ListarDireccionesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    APP_ROUTES,
    HttpClientModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    // FlexLayoutModule,
    MatListModule,
    MatMenuModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [MessageErrorsService, AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
