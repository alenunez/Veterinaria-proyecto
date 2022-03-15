import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {
  usuario:Usuario = new Usuario();
  mascotas:any=[]
  user:any={}
  pet:any={}

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
      this.verMascotasUsuario();
    })
  }

  verMascotasUsuario(){
    this.api.getUsuarioMascota().subscribe(data=>{
      this.mascotas=data;
    })
  }
  eliminar():void{
    this.api.eliminarUsuario().subscribe();
    console.log("Usuario eliminado")
    alert("Usuario eliminado exitosamente.");
    location.href="/adminUsuarios"
  }

}
