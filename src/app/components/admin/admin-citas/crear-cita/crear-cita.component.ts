import { CitaMedica } from './../../../../modelos/citaMedica';
import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';
import { Usuario } from 'src/app/modelos/usuario';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  mascota:Mascota=new Mascota;
  usuarios:any=[];
  mascotas:any=[]
  cita:CitaMedica=new CitaMedica();
  usuario:Usuario= new Usuario();
  filterPost='';
  filterMascota='';
  id=0;
  idMascota=0;
  constructor(private api:AdminServiceService) { }

  ngOnInit(): void {
    this.verUsuarios();
    this.getMascotas();
  }
  verUsuarios(){
    this.api.getUsuarios().subscribe(data=>{
      this.usuarios=data;
    }) 
  }
  getMascotas(){
    this.api.getMascotas().subscribe(data=>{
      this.mascotas=data;
      console.log(this.mascota)
    }) 
  }

  crearCita(){   
    if(this.id==0){
      alert("Tiene que seleccionar un veterinario para cada cita")
    }
    else if(this.idMascota==0){
      alert("Tiene que seleccionar una mascota para cada cita")    
    }
    else{
      let formulario:any = document.getElementById("crear");
      let formularioValido:boolean = formulario.reportValidity();
      if( formularioValido){
        this.api.createCita(this.cita,this.id,this.idMascota).subscribe(
          data => this.confirmar(data)
        )
      }
    }

  }
  confirmar(resultado:any){
    if(resultado){
      alert("Cita creada exitosamente.");
      location.href="/adminCitas"
    }
    else{
      alert("Error al crear la cita");
  
    }
  }
  guardarIdVeterinario(para:any){
    this.usuario=para;
    console.log(this.usuario)
    this.id = this.usuario.idUsuario;
    alert("Ha seleccionado un veterinario")
    return this.usuario.idUsuario;
  }
  guardarIdMascota(para:any){
    this.mascota=para;
    console.log(this.mascota)
    this.idMascota = this.mascota.idMascota;
    alert("Ha seleccionado una mascota")
    return this.mascota.idMascota;
  }

}
