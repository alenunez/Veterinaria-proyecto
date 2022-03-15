import { Usuario } from './../../../modelos/usuario';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  usuario:Usuario=new Usuario();

  user:any
  usuarioUpdate:any ={}




  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.verUsuario();
  }

  verUsuario(){
    this.api.getUsuarioLogueado().subscribe(data=>{
      this.user=data;
      this.usuario=this.user;
    })
  }

  actualizarUsuario(){
    let formulario:any = document.getElementById("actualizar");
    let formularioValido:boolean = formulario.reportValidity();
    if( formularioValido){
      this.api.updateUsuario(this.usuario).subscribe(
        data => this.confirmar(data)
      )
    }
  }
  confirmar(resultado:any){
    
      alert("Usuario actualizado exitosamente.");
 
  }
}
