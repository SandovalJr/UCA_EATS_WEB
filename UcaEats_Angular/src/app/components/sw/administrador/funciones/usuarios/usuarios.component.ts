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

  public UsuariosListados;

  ngOnInit(): void {}

  public getUsers() {
    this.UsuariosListados = [];

    this.auth.ListarClientes().subscribe(
      (usuarios) => {
        // console.log(usuarios);
        this.UsuariosListados = usuarios;
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

  EliminarUsuario(id: any) {
    Swal.fire({
      title: "Seguro que quieres eliminarlo?",
      text: "No podras volver atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00a441",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        this.auth.eliminarUsuario(id).subscribe(
          (userEliminado) => {
            // console.log(userEliminado);
            window.location.reload();
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }

  goToUpdate(user_id: any) {
    this.router.navigate([`Inicio_Administrador/ActualizarUsuario/${user_id}`]);
  }
}
