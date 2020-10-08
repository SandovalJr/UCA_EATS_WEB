import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from "@angular/forms";

import {
  categorySevice,
  CategoryDetails,
  CategoryLoad,
} from "../../../../../../services/category.service";
import { MessageErrorsService } from "../../../../../../services/messageError.service";
import { Router } from "@angular/router";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

// SWEETALERT 2
// declarar variable de esta manera para que no marque err
declare var require: any;
const Swal = require("sweetalert2");

@Component({
  selector: "app-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.scss"],
})
export class CategoriasComponent implements OnInit {
  public formulario: FormGroup;
  // buscador
  term: any;
  // paginador
  pageActual: number = 1;

  credentials: CategoryLoad = {
    category_id: 0,
    category_name: "",
  };

  constructor(
    private cat: categorySevice,
    private MessageErrorSvr: MessageErrorsService
  ) {}

  ngOnInit(): void {
    this.CategoriasList();
    this.creatForm();
  }

  public Categorias;
  public creatForm() {
    this.formulario = new FormGroup({
      category_name: new FormControl(null, [RxwebValidators.required()]),
    });
  }

  public ValidarFormulario(control: string) {
    if (!this.formulario.controls[control].touched) return { error: undefined };
    return this.MessageErrorSvr.errorMessage(
      this.formulario.controls[control].errors
    );
  }

  public CategoriasList() {
    this.Categorias = [];
    this.cat.ListCategory().subscribe(
      (data) => {
        this.Categorias = data;
        console.log(this.Categorias);
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

  public DelCategory(id: any) {
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
        this.cat.EliminarCategory(id).subscribe(
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
}
