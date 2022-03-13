import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {
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
    else if(this.rol =="veterinario"){
      location.href="/homeVeterinario";

    }
  }

  logout(){
    localStorage.removeItem("usuario");
    sessionStorage.removeItem("correoUsuario");
    sessionStorage.removeItem("rol");
    location.href="/";

  }

}
