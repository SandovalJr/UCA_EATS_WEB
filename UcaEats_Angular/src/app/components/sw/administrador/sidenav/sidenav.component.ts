import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import {
  AuthenticationService,
  UserDetails,
} from "../../../../../services/authentication.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  details: UserDetails;
  mobileQuery: MediaQueryList;

  fillerNav = [
    { name: "Inicio", route: "/Inicio_Administrador", icon: "home" },
    {
      // name: "Usuarios",
      // route: "/AdminProfile/ListaUsuarios",
      // icon: "supervised_user_circle",
    },
  ];

  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public auths: AuthenticationService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
  ngOnInit(): void {
    this.auths.profile().subscribe(
      (user) => {
        this.details = user;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
