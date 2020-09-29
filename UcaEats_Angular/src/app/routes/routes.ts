import { RouterModule, Routes } from "@angular/router";
import { Component } from "@angular/core";

// SERVICIOS
import { AuthGuardService } from "../../services/auth-guard.service";

// Inicio
import { InicioComponent } from "../components/inicio/inicio.component";
// LogIn
import { LoginComponent } from "../components/sw/login/login.component";

// Administrador
import { AdministradorComponent } from "../components/sw/administrador/administrador.component";

// Cliente
import { ClienteComponent } from "../components/sw/cliente/cliente.component";

const routes: Routes = [
  { path: "", component: InicioComponent },
  {
    path: "LogIn_UcaMeals",
    component: LoginComponent,
  },
  {
    path: "Inicio_Cliente",
    component: ClienteComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "Inicio_Administrador",
    component: AdministradorComponent,
    canActivate: [AuthGuardService],
  },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
