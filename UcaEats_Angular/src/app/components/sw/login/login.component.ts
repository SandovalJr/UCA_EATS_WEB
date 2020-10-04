import { Component, OnInit } from "@angular/core";
import {
  AuthenticationService,
  TokenPayload,
} from "../../../../services/authentication.service";

import { Router } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import {
  RxwebValidators,
  ReactiveFormConfig,
  NumericValueType,
} from "@rxweb/reactive-form-validators";
// servicio
import { MessageErrorsService } from "../../../../services/messageError.service";
// SWEETALERT 2
// declarar variable de esta manera para que no marque err
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
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

  public formulario: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private MessageErrorSvr: MessageErrorsService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.formulario = new FormGroup({
      username: new FormControl(null, [RxwebValidators.required()]),
      password: new FormControl(null, [RxwebValidators.required()]),
    });
  }

  public ValidateForm(control: string) {
    // console.log(this.formulario.controls[control].errors);
    if (!this.formulario.controls[control].touched) return { error: undefined };

    return this.MessageErrorSvr.errorMessage(
      this.formulario.controls[control].errors
    );
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/Inicio_Administrador/Menu_Inicio_Admin");
        // console.log(this.credentials);
      },
      (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o Clave incorrecta",
        });
        console.error(err);
      }
    );
  }
}
