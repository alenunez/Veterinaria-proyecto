import { AdminServiceService } from './../../../../services/admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuario:any ={}

  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
  }
  crearUsuario(){
    let formulario:any = document.getElementById("crear");
    let formularioValido:boolean = formulario.reportValidity();
    if( formularioValido){
      this.api.createUsuario(this.usuario).subscribe(
        data => this.confirmar(data)
      )
    }
  }
  confirmar(resultado:any){
    if(resultado){
      alert("Usuario creado exitosamente.");
      this.usuario={};
    }
    else{
      alert("Error al crear el usuario");
  
    }
  }

}
