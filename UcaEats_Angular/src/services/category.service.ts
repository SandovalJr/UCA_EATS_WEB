import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

export interface CategoryDetails {
  category_id: number;
  category_name: string;
  exp: number;
  iat: number;
}

export interface CategoryLoad {
  category_id: number;
  category_name: string;
}

@Injectable()
export class categorySevice {
  private token: string;
  baseUrl = "http://localhost:3000/api/category/";

  constructor(private http: HttpClient, private router: Router) {}

  // ADD Category
  public registerCategory(category: any): Observable<any> {
    // console.log("llego");
    console.log(category);
    return this.http.post(`${this.baseUrl}AddCategory`, category);
  }

// Regresar la info de una category
// public InfoCategory()


}
