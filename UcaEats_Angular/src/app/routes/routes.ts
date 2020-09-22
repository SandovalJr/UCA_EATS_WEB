import { RouterModule, Routes } from "@angular/router";
import { Component } from "@angular/core";

// Inicio
import { InicioComponent } from "../components/inicio/inicio.component";

const routes: Routes = [{ path: "", component: InicioComponent }];

export const APP_ROUTES = RouterModule.forRoot(routes);
