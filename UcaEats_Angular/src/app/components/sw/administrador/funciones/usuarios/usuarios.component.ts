import { Component, OnInit } from "@angular/core";
import { Routes, Router } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  AuthenticationService,
  UserDetails,
  TokenPayload,
} from "../../../../../../services/authentication.service";

// SWEETALERT 2
// declarar variable de esta manera para que no marque err
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.scss"],
})
export class UsuariosComponent implements OnInit {
  loading: boolean = false;
  // buscador
  term: any;
  // paginador
  pageActual: number = 1;

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private http: HttpClient
  ) {
    this.getUsers();
  }

  public UsuariosListados: Array<any> = [];

  ngOnInit(): void {}

  public getUsers() {
    this.UsuariosListados = [];

    this.auth.ListarClientes().subscribe(
      (usuarios) => {
        console.log(usuarios);
        this.UsuariosListados.push(usuarios);
      },
      (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salio mal!",
        });
        console.error(err);
      }
    );
  }
}
