import { Usuario } from './../../../../modelos/usuario';
import { Mascota } from './../../../../modelos/mascota';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {
  mascota:Mascota=new Mascota;
  usuarios:any=[];
  usuario:Usuario= new Usuario();
  filterPost='';
  id=0;

  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.verUsuarios();
  }
  verUsuarios(){
    this.api.getUsuarios().subscribe(data=>{
      this.usuarios=data;
    }) 
  }
  seguro(){

  
  }
  
  crearMascota(){   
    if(this.id==0){
      alert("Tiene que seleccionar un dueño para cada mascota")
    }
    else{
      console.log(this.guardarId)
      let formulario:any = document.getElementById("crear");
      let formularioValido:boolean = formulario.reportValidity();
      if( formularioValido){
        this.api.createMascota(this.mascota,this.id).subscribe(
          data => this.confirmar(data)
        )
      }
      location.href="/adminMascotas"
    }

  }
  confirmar(resultado:any){
    if(resultado){
      alert("Mascota creada exitosamente.");
    }
    else{
      alert("Error al crear la mascota");
  
    }
  }
guardarId(para:any){
  this.usuario=para;
  console.log(this.usuario)
  this.id = this.usuario.idUsuario;
  alert("Ha seleccionado un usuario")
  return this.usuario.idUsuario;
}

}
