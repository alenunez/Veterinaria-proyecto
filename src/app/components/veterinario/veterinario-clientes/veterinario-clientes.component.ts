import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-veterinario-clientes',
  templateUrl: './veterinario-clientes.component.html',
  styleUrls: ['./veterinario-clientes.component.css']
})
export class VeterinarioClientesComponent implements OnInit {
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
  verCliente(parametro:any){
    this.usuario=parametro
    console.log(this.usuario.nombres)
    this.api.disparador.emit({data:this.usuario})
    location.href="/veterinarioVerCliente"
    sessionStorage.setItem('userID',JSON.stringify( this.usuario.idUsuario))
    //this.api.setProductosWishList(this.producto.idproducto,this.producto);
  }

}
