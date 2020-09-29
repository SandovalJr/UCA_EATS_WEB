import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MessageErrorsService {
  constructor() {}
  public errorMessage(errorRecibido: Object) {
    let message: string;
    if (errorRecibido == null) {
      return {
        error: false,
      };
    }

    switch (true) {
      case errorRecibido.hasOwnProperty("required"):
        message = "Este campo es necesario";
        break;

      case errorRecibido.hasOwnProperty("minLength"):
        message = "Es necesario minimo 3 caracteres";
        break;

      case errorRecibido.hasOwnProperty("numeric"):
        message = "Tienes que ingresar un valor numerico";
        break;

      case errorRecibido.hasOwnProperty("alpha"):
        message = "Tienes que ingresar texto";
        break;
    }
    return {
      message,
      error: true,
    };
  }
}
