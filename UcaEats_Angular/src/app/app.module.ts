import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// RX
import { ReactiveFormsModule } from "@angular/forms"; // <-- #1 import module
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"; // <-- #2 import module

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

// CLIENTE
import { ClienteComponent } from "./components/sw/cliente/cliente.component";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AdministradorComponent,
    ClienteComponent,
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
  ],
  providers: [MessageErrorsService, AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
