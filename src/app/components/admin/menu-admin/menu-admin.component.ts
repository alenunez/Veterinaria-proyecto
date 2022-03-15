import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
  usuario:any={};
  rol:any={};


  constructor() { }

  ngOnInit(): void {
    this.usuario = (localStorage.getItem("usuario"));
    this.rol =(sessionStorage.getItem("rol"));
    if(!this.usuario){
      location.href="/";
    }
    else if(this.rol =="veterinario"){
      location.href="/homeVeterinario";

    }
    else if(this.rol =="cliente"){
      location.href="/homeCliente";

    }
  }
  logout(){
    localStorage.removeItem("usuario");
    localStorage.removeItem("idUsuarioSesion")
    sessionStorage.removeItem("correoUsuario");
    sessionStorage.removeItem("rol");
    sessionStorage.removeItem("CitaID");
    sessionStorage.removeItem("MascotaID");
    sessionStorage.removeItem("userID");



    location.href="/";

  }

}
