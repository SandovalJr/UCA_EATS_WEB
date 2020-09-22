import { RouterModule, Routes } from "@angular/router";
import { Component } from "@angular/core";

// Inicio
import { InicioComponent } from "../components/inicio/inicio.component";
// LogIn
import { LoginComponent } from "../components/sw/login/login.component";

const routes: Routes = [
  { path: "", component: InicioComponent },
  {
    path: "LogIn_UcaMeals",
    component: LoginComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
