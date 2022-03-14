import { Usuario } from './../modelos/usuario';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }
  createUsuario(usuario: any) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/usuario/guardar", usuario, httpOptions);
  }

  getUsuarios() {
    return this.http.get(`http://localhost:8080/usuario/buscar`)
  }
  getUsuario() {
    console.log(`http://localhost:8080/usuario/buscar/` + sessionStorage.getItem("userID"));

    return this.http.get(`http://localhost:8080/usuario/buscar/` + sessionStorage.getItem("userID"))
  }

  eliminarUsuario(): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:8080/usuario/eliminar/` + sessionStorage.getItem("userID"))
  }
  getMascotas(){
    return this.http.get(`http://localhost:8080/mascota/buscar`)
  }
  createMascota(mascota: any,id:any) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    console.log("http://localhost:8080/mascota/guardar/"+id)
    return this.http.post<any>("http://localhost:8080/mascota/guardar/"+id, mascota, httpOptions);
  }

createMascotaa(mascota: any) {
  var httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  return this.http.post<any>("http://localhost:8080/mascota/guardara/", mascota, httpOptions);
}
}
