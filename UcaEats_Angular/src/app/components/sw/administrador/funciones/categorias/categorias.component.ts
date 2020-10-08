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

  credentials: CategoryLoad = {
    category_id: 0,
    category_name: "",
  };

  constructor() {}

  ngOnInit(): void {}
}
