import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from "@angular/forms";

import {
  AuthenticationService,
  UserDetails,
  TokenPayload,
} from "../../../../services/authentication.service";
import { MessageErrorsService } from "../../../../services/messageError.service";
import { Router } from "@angular/router";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

// SWEETALERT 2
// declarar variable de esta manera para que no marque err
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public formulario: FormGroup;
  details: UserDetails;

  credentials: TokenPayload = {
    user_id: 0,
    username: "",
    first_name: "",
    last_name: "",
    gender: "",
    password: "",
    UserType: "",
    phone: "",
  };

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private MessageErrorSvr: MessageErrorsService
  ) {}

  ngOnInit(): void {
    this.creatForm();
    this.PredefinirCliente();
  }

  public PredefinirCliente() {
    this.credentials.UserType = "cliente";
  }

  public creatForm() {
    this.formulario = new FormGroup({
      username: new FormControl(null, [RxwebValidators.required()]),
      first_name: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.alpha(),
      ]),
      last_name: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.alpha(),
      ]),
      gender: new FormControl(null, [
        RxwebValidators.required(),
        RxwebValidators.alpha(),
      ]),
      password: new FormControl(null, [RxwebValidators.required()]),
      phone: new FormControl(null, [RxwebValidators.required()]),
    });
  }

  public ValidarFormulario(control: string) {
    if (!this.formulario.controls[control].touched) return { error: undefined };
    return this.MessageErrorSvr.errorMessage(
      this.formulario.controls[control].errors
    );
  }

  public AddUser() {
    if (this.formulario.valid) {
      this.auth.register(this.credentials).subscribe(
        () => {
          Swal.fire(
            "Se Agrego Correctamente",
            "Presiona para continuar..",
            "success"
          );
          this.router.navigateByUrl(`/LogIn_UcaMeals`);
        },
        (err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario ya existente",
          });
          console.error(err);
        }
      );
    } else {
      Swal.fire({
        title: "Campos Incompletos!",
        text: "completa todos para continuar",
        icon: "warning",
      });
    }
  }
}
