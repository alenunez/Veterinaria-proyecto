import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }
  createUsuario(usuario:any){
    var httpOptions={
      headers:new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return   this.http.post<any>("http://localhost:8080/usuario/guardar", usuario,httpOptions);
  }

  getUsuarios() {
    return this.http.get(`http://localhost:8080/usuario/buscar`)
  }
}
