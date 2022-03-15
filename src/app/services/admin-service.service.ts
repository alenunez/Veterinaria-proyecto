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
    return this.http.get(`http://localhost:8080/usuario/buscar/` + sessionStorage.getItem("userID"))
  }
  getUsuarioLogueado() {
    return this.http.get(`http://localhost:8080/usuario/buscar/` + localStorage.getItem("idUsuarioSesion"))
  }
  getUsuarioMascota() {
    return this.http.get(`http://localhost:8080/usuario/buscar/mascotas/` + sessionStorage.getItem("userID"))
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
    return this.http.post<any>("http://localhost:8080/mascota/guardar/"+id, mascota, httpOptions);
  }
  getMascota() {

    return this.http.get(`http://localhost:8080/mascota/buscar/` + sessionStorage.getItem("MascotaID"))
  }

  eliminarMascota(): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:8080/mascota/eliminar/` + sessionStorage.getItem("MascotaID"))
  }

  getCitas(){
    return this.http.get(`http://localhost:8080/citaMedica/buscar`)
  }
  createCita(cita: any,idUsuario:any,idMascota:any) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/citaMedica/guardar/"+idUsuario+"/"+idMascota, cita, httpOptions);
  }
  getCita() {

    return this.http.get(`http://localhost:8080/citaMedica/buscar/` + sessionStorage.getItem("CitaID"))
  }

  eliminarCita(): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:8080/citaMedica/eliminar/` + sessionStorage.getItem("CitaID"))
  }


}
