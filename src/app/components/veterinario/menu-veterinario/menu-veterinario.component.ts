import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-veterinario',
  templateUrl: './menu-veterinario.component.html',
  styleUrls: ['./menu-veterinario.component.css']
})
export class MenuVeterinarioComponent implements OnInit {
  usuario:any={};
  rol:any={};

  constructor() { }

  ngOnInit(): void {
    this.usuario = (localStorage.getItem("usuario"));
    this.rol =(sessionStorage.getItem("rol"));
    if(!this.usuario){
      location.href="/";
    }
    else if(this.rol =="administrador"){
      location.href="/homeAdmin";

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
