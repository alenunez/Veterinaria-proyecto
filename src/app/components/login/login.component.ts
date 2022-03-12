import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { LoginI} from '../../modelos/login.interface'
import { Usuario } from 'src/app/modelos/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 

  correo: any = [];
  password: any = [];
  usuario: Usuario = new Usuario();

  loginForm = new FormGroup({
    correo:  new FormControl('',Validators.required ),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: LoginService,) { }

  ngOnInit(): void {
    //  this.checkLocalStorage();
  }

  /** checkLocalStorage(){
     if(localStorage.getItem('token')){
       location.href="/home"
     }
     else if(localStorage.getItem('tokenAdmin')){
       location.href="/homeAdmin"
     }
   }*/


  onLogin() {
    this.api.loginUsuario(this.correo, this.password).subscribe(data => {
      if (data) {
        this.usuario = data;
        console.log(this.usuario)
        localStorage.setItem("usuario", JSON.stringify(this.usuario)); 
        sessionStorage.setItem("correoUsuario",this.usuario.correo)
        if(this.usuario.rol=="administrador"){
          location.href="/homeAdmin"
        }
        else if(this.usuario.rol=="veterinario"){
          location.href="/homeVeterinario"
        }
        else if(this.usuario.rol=="cliente"){
          location.href="/homeCliente"
        }

      }
    })
  }
  getUsuario(){
    return this.usuario;

  }



}
