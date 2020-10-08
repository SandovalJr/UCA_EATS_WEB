import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

export interface CategoryDetails {
  category_id: number;
  category_name: string;
  img_category: string;
  exp: number;
  iat: number;
}

export interface CategoryLoad {
  category_id: number;
  category_name: string;
  img_category: string;
}

@Injectable()
export class AuthenticationService {
  private token: string;
  baseUrl = "http://localhost:3000/api/upload";

  constructor(private http: HttpClient, private router: Router) {}

  // ADD Img
  public AddImage(category: any, tipoImg: any, id: any): Observable<any> {
    // console.log("llego");
    console.log(category);
    return this.http.post(`${this.baseUrl}/${tipoImg}/${id}`, category);
  }


}
