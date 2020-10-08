import { RouterModule, Routes } from "@angular/router";
import { Component } from "@angular/core";

// SERVICIOS
import { AuthGuardService } from "../../services/auth-guard.service";

// Inicio
import { InicioComponent } from "../components/inicio/inicio.component";
// LogIn
import { LoginComponent } from "../components/sw/login/login.component";
import { RegisterComponent } from "../components/sw/register/register.component";

// Administrador
import { AdministradorComponent } from "../components/sw/administrador/administrador.component";
import { MenuInicioAdminComponent } from "../components/sw/administrador/menu-inicio-admin/menu-inicio-admin.component";
import { UsuariosComponent } from "../components/sw/administrador/funciones/usuarios/usuarios.component";
import { CategoriasComponent } from "../components/sw/administrador/funciones/categorias/categorias.component";
import { ProductosComponent } from "../components/sw/administrador/funciones/productos/productos.component";
import { UpdateUserComponent } from "../components/sw/administrador/funciones/usuarios/update-user/update-user.component";

// Cliente
import { ClienteComponent } from "../components/sw/cliente/cliente.component";

const routes: Routes = [
  { path: "", component: InicioComponent },
  {
    path: "LogIn_UcaMeals",
    component: LoginComponent,
  },
  {
    path: "Registrate",
    component: RegisterComponent,
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
    children: [
      {
        path: "Menu_Inicio_Admin",
        component: MenuInicioAdminComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "Usuarios",
        component: UsuariosComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "Categorias",
        component: CategoriasComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "Platillos",
        component: ProductosComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "ActualizarUsuario/:user_id",
        component: UpdateUserComponent,
        canActivate: [AuthGuardService],
      },
    ],
  },
];

export const APP_ROUTES = RouterModule.forRoot(routes);
