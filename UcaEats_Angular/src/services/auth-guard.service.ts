import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.url[0], state);

    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl("/");
      return false;
    }

    if (
      route.url[0].path === "Inicio_Administrador" &&
      this.auth.IsAdmin() === 0
    ) {
      return true;
    }

    if (
      route.url[0].path === "Inicio_Administrador" &&
      this.auth.IsAdmin() === 7
    ) {
      if (this.auth.IsCliente() === 2) {
        this.router.navigateByUrl("Inicio_Cliente");
      } else {
        this.router.navigateByUrl("/loginError");
      }
    }

    return true;
  }
}
