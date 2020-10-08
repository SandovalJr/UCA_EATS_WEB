import { Component, OnInit } from "@angular/core";
import { Routes, Router } from "@angular/router";

@Component({
  selector: "app-menu-inicio-admin",
  templateUrl: "./menu-inicio-admin.component.html",
  styleUrls: ["./menu-inicio-admin.component.scss"],
})
export class MenuInicioAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToUsers() {
    this.router.navigate([`Inicio_Administrador/Usuarios`]);
  }

  goToCategorys() {
    this.router.navigate([`Inicio_Administrador/Categorias`]);
  }

  goToPlatillos() {
    this.router.navigate([`Inicio_Administrador/Platillos`]);
  }



}
