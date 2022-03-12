import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
}) 
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUsuario(correo: string, password: string):Observable<Usuario>{
    return this.http.post<Usuario>(`http://localhost:8080/usuario/login`, {correo , password })
  
  }
}
