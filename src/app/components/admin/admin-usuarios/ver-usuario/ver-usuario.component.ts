import { Usuario } from './../../../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {
  usuario:Usuario = new Usuario();
  user:any={}

  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.verUsuario()
    console.log(sessionStorage.getItem("userID"))
  }
  verUsuario(){
    this.api.getUsuario().subscribe(data=>{
      this.user=data;
      this.usuario=this.user;
      console.log(this.usuario);
    })
  }
  eliminar():void{
    this.api.eliminarUsuario().subscribe();
    console.log("Usuario eliminado")
    alert("Usuario eliminado exitosamente.");
    location.href="/adminUsuarios"
  }

}
