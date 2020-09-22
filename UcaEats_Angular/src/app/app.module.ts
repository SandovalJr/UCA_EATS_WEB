import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { FormsModule } from "@angular/forms";
import { InicioComponent } from "./components/inicio/inicio.component";
import { NavbarComponent } from "./components/inicio/partials/navbar/navbar.component";
import { FooterComponent } from "./components/inicio/partials/footer/footer.component";

// RUTAS
import { APP_ROUTES } from "./routes/routes";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
