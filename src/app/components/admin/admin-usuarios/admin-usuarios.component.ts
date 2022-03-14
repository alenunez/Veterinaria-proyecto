import { Usuario } from './../../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {
  usuarios:any=[];
 usuario:Usuario = new Usuario();

  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.getUsers();

  }
  getUsers(){
    this.api.getUsuarios().subscribe(data=>{
      this.usuarios=data;
      console.log(this.usuarios);
    }) 
  }
  crearUsuario(){
    location.href="/adminCrearUsuario";
  }
  verUsuario(parametro:any){
    this.usuario=parametro
    console.log(this.usuario.nombres)
    this.api.disparador.emit({data:this.usuario})
    location.href="/adminVerUsuario"
    sessionStorage.setItem('userID',JSON.stringify( this.usuario.idUsuario))
    //this.api.setProductosWishList(this.producto.idproducto,this.producto);
  }



}
