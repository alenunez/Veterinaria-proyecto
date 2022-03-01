import { Injectable } from '@angular/core';

import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:String = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "usuarios";
    return this.http.post<ResponseI>(direccion,form);

  }
}
